"use client";
import { ChangeEvent, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { PALETTE } from "@/app/theme/styles/constantes";
import { baseURL } from "@/util/baseURL";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Collapse,
  Container,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Bell, CaretDown } from "@phosphor-icons/react";

import { LENGTH_EMAIL, LENGTH_NAME, objSelectRegionsFilter } from "./constants";
import { FormAlert } from "./FormAlert";
import { FormTextField, FormTextField_Email } from "./FormTextField";
import getAllLocations from "./services/getAllLocations";
import {
  form,
  form_button,
  form_collapseList,
  form_row,
  form_sectionTitle,
  form_text,
  form_textRow,
  form_textStacker,
  form_validationMsg,
  form_wrapper,
  formAllLocations_select,
} from "./styles";
import { FormErrors } from "./types";

const url = `${baseURL}/Form/AddPowerOutageNotificationSubscription`;
interface CollapseState {
  [key: string]: boolean;
}

interface SelectOption {
  id: string;
  name: string;
}

interface Freguesia {
  id: string;
  name: string;
}

interface Concelho {
  id: string;
  name: string;
  childTerms: Freguesia[];
}

interface Ilha {
  id: string;
  name: string;
  childTerms: Concelho[];
}

export const FormPedidoDeSubscricaoDeAlertasDeInterrupcoesDeEnergia = () => {
  const KEY_RECAPTCHA = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<SelectOption[]>([]);
  const [selectedItemsCount, setSelectedItemsCount] = useState(
    selectedItems.length
  );
  const [isSelectFocused, setIsSelectFocused] = useState(false);
  const [regionSelect, setRegionSelect] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [captcha, setCaptcha] = useState<string | null>();
  const [collapseOpen, setCollapseOpen] = useState<CollapseState>({});
  const MAX_LOCATIONS = 5;
  const [apiData, setApiData] = useState<Ilha[]>([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({
    nome: false,
    email: false,
    regionSelect: false,
  });
  const noErrors = () => {
    setErrors({
      nome: false,
      email: false,
      regionSelect: false,
    });
  };
  const [alertDisplay, setAlertDisplay] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("");

  const handleAlertClose = (event: React.SyntheticEvent) => {
    setAlertDisplay(false);
  };

  const onlyAllowLetters = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const sanitizedValue = input.value.replace(/[^a-zA-Z\s]/g, "");
    input.value = sanitizedValue;
  };
  const handleEmailInputChange = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: isValidEmail ? false : true,
    }));
    setEmail(isValidEmail ? value : "");
  };

  const handleCollapseToggle = (section: string) => {
    setCollapseOpen((prevState) => {
      const updatedState = { ...prevState };
      updatedState[section] = !updatedState[section];
      return updatedState;
    });
  };

  const handleSelectOpen = () => {
    setSelectOpen(true);
  };

  const handleSelectFocus = () => {
    setIsSelectFocused(true);
  };

  const handleSelectBlur = () => {
    setIsSelectFocused(false);
  };

  const handleItemClick = (option: SelectOption) => () => {
    if (selectedItems.length < MAX_LOCATIONS || selectedItems.some(item => item.id === option.id)) {
      const currentIndex = selectedItems.findIndex(item => item.id === option.id);
      const newSelected = [...selectedItems];

      if (currentIndex === -1) {
        if (selectedItems.length < MAX_LOCATIONS) {
          newSelected.push(option);
        }
      } else {
        newSelected.splice(currentIndex, 1);
      }

      setSelectedItems(newSelected);

      setErrors((prevErrors) => ({
        ...prevErrors,
        regionSelect: newSelected.length === 0,
      }));
    }
  };

  const handleInputChange = (
    valueOrEvent: string | ChangeEvent<HTMLInputElement>,
    inputName: keyof FormErrors,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    let value = valueOrEvent;
    if (typeof valueOrEvent !== "string") {
      value = valueOrEvent.target.value;
    }
    setState(value as string);
    const isError = (value as string).trim() === "";
    setErrors((prevErrors) => ({
      ...prevErrors,
      [inputName]: isError,
    }));
  };

  useEffect(() => {
    const disableCheckboxes = () => {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox) => {
        const checkboxValue = checkbox.getAttribute("value");
        if (checkboxValue && !selectedItems.some(item => item.name === checkboxValue)) {
          checkbox.setAttribute("disabled", "disabled");
        } else {
          checkbox.removeAttribute("disabled");
        }
      });
    };

    disableCheckboxes();

    return () => {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox) => {
        checkbox.removeAttribute("disabled");
      });
    };
  }, [selectedItems]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Ilha[] = await getAllLocations();
        const filteredData = data.filter(
          (ilha) => ilha.name !== "DISTRIBUICAO"
        );
        setApiData(filteredData);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
        setLoading(false);
      }
    };
    if (apiData.length === 0) {
      fetchData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const successStatus = localStorage.getItem("formSubmitSuccess");
    if (successStatus === "true") {
      setAlertDisplay(true);
      setAlertSeverity("success");
      localStorage.removeItem("formSubmitSuccess");
      setLoading(false);
    }
  }, []);

  const handleSubmit = async () => {
    if (nome && email && selectedItems.length > 0) {
      if (captcha) {
        setLoading(true);
        noErrors();
  
        const locations = selectedItems.map((item) => ({
          Key: String(item.id),
          Value: String(item.name),
        }));
  
        const payload = {
          Name: nome,
          Email: email,
          Locations: locations,
        };
  
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
  
          if (!response.ok) {
            setAlertDisplay(true);
            setAlertSeverity("warning");
          } else {
            localStorage.setItem("formSubmitSuccess", "true");
            window.location.reload();
          }
        } catch (error) {
          console.error("Erro na chamada à API:", error);
          setAlertDisplay(true);
          setAlertSeverity("warning");
        } finally {
        }
      }
    } else {
      setErrors({
        nome: !nome,
        email: !email,
        regionSelect: selectedItems.length === 0,
      });
      setAlertDisplay(true);
      setAlertSeverity("error");
    }
  };

  return (
    <>
      <Container sx={form}>
        <Container sx={form_wrapper}>
          <Box sx={form_sectionTitle}>Identificação do requerente</Box>
          <Box sx={form_row}>
            <FormTextField
              title={"Nome"}
              placeholder={"O seu nome"}
              error={errors.nome}
              maxLength={LENGTH_NAME}
              onInputChange={(e) => handleInputChange(e, "nome", setNome)}
              onInput={onlyAllowLetters}
              isOpcional={false}
            />
            <FormTextField_Email
              title={"E-mail"}
              placeholder={"O seu e-mail"}
              error={errors.email}
              maxLength={LENGTH_EMAIL}
              onInputChange={handleEmailInputChange}
              isOpcional={false}
            />
          </Box>

          <Box sx={form_textStacker}>
            <Box sx={form_textRow}>
              <Typography sx={form_text}>Localizações</Typography>
            </Box>

            <FormControl sx={formAllLocations_select}>
              {selectedItems.length === 0 &&
                !isSelectFocused && ( // Render InputLabel only if no items are selected and Select is not focused
                  <InputLabel id="demo-controlled-open-select-label">
                    Selecione as localizações
                  </InputLabel>
                )}
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={selectOpen}
                onClose={() => setSelectOpen(false)}
                onOpen={handleSelectOpen}
                onFocus={handleSelectFocus} 
                onBlur={handleSelectBlur} 
                value={selectedItems}
                multiple
                error={errors.regionSelect}
                renderValue={(selected) => selected.map((item) => item.name).join(", ")}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 300,
                    },
                  },
                }}
                onChange={(e: any) => setRegionSelect(e.target.value as string)}
                sx={{
                  "& fieldset": {
                    borderColor: errors.regionSelect ? "red" : "",
                  },
                }}
              >
                {apiData.map((ilha) => (
                  <>
                    <MenuItem key={ilha.id}>
                      <Checkbox
                        checked={selectedItems.indexOf(ilha) > -1}
                        onClick={handleItemClick(ilha)}
                      />
                      <ListItemText primary={ilha.name} />
                      <Button
                        onClick={() => handleCollapseToggle(ilha.name)}
                        endIcon={
                          <CaretDown
                            size={24}
                            color={PALETTE.BLACK}
                            style={{
                              transform: `rotate(${
                                collapseOpen[ilha.name] ? 180 : 0
                              }deg)`,
                            }}
                          />
                        }
                      />
                    </MenuItem>

                    <Collapse
                      in={collapseOpen[ilha.name]}
                      sx={form_collapseList}
                    >
                      {ilha.childTerms.map((concelho) => (
                        <>
                          <MenuItem key={concelho.id}>
                            <Checkbox
                              checked={
                                selectedItems.indexOf(concelho) > -1
                              }
                              onClick={handleItemClick(concelho)}
                            />
                            <ListItemText primary={concelho.name} />
                            <Button
                              onClick={() =>
                                handleCollapseToggle(concelho.name)
                              }
                              endIcon={
                                <CaretDown
                                  size={24}
                                  color={PALETTE.BLACK}
                                  style={{
                                    transform: `rotate(${
                                      collapseOpen[concelho.name] ? 180 : 0
                                    }deg)`,
                                  }}
                                />
                              }
                            />
                          </MenuItem>
                          <Collapse
                            in={collapseOpen[concelho.name]}
                            sx={form_collapseList}
                          >
                            {concelho.childTerms.map((freguesia) => (
                              <MenuItem key={freguesia.id}>
                                <Checkbox
                                  checked={
                                    selectedItems.indexOf(freguesia) > -1
                                  }
                                  onClick={handleItemClick(freguesia)}
                                />
                                <ListItemText primary={freguesia.name} />
                              </MenuItem>
                            ))}
                          </Collapse>
                        </>
                      ))}
                    </Collapse>
                  </>
                ))}
              </Select>
              <Typography
                sx={{
                  ...form_validationMsg,
                  opacity: errors.regionSelect ? 1 : 0,
                }}
              >
                Por favor, preencha este campo corretamente.
              </Typography>
            </FormControl>
          </Box>
          <Box sx={form_textStacker}>
            <ReCAPTCHA
              sitekey={KEY_RECAPTCHA as string}
              onChange={setCaptcha}
            />
          </Box>
        </Container>

        <Button
          sx={form_button}
          variant="contained"
          endIcon={
            loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              <Bell size={24} color={PALETTE.BLACK} />
            )
          }
          onClick={handleSubmit}
          disabled={loading}
        >
          Gravar subscrições
        </Button>
      </Container>
      <FormAlert
        severity={alertSeverity}
        alertDisplay={alertDisplay}
        handleClose={handleAlertClose}
        sucessMessage={
          "Consulte a sua caixa de e-mail e siga as instruções para confirmar o seu pedido de subscrição, para darmos seguimento ao mesmo. Obrigado!"
        }
      />
    </>
  );
};
