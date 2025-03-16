"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { PALETTE } from "@/app/theme/styles/constantes";
import { baseURL } from "@/util/baseURL";
const url = `${baseURL}/Form/AddLightingComplaint`;
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { CaretDown, PaperPlaneTilt } from "@phosphor-icons/react";
import {
  form,
  form_button,
  form_mandatoryLabel,
  form_row,
  form_sectionTitle,
  form_text,
  form_textRow,
  form_textStacker,
  form_validationMsg,
  form_wrapper,
} from "./styles";
import {
  LENGTH_COMENTARIOS,
  LENGTH_CONCELHO,
  LENGTH_DESCRIPTION,
  LENGTH_EMAIL,
  LENGTH_LOCALIDADE,
  LENGTH_MORADA,
  LENGTH_NAME,
  LENGTH_PORTA,
  LENGTH_TELEFONE,
} from "./constants";
import { FormAlert } from "./FormAlert";
import {
  FormTextField,
  FormTextField_AllowAll,
  FormTextField_CodigoPostal,
  FormTextField_Email,
  FormTextField_Multiline,
  FormTextField_Number,
} from "./FormTextField";
import { Form_FileUpload } from "./Form_FileUpload";

export type FormErrors = {
  nome: boolean;
  email: boolean;
  mensagem: boolean;
  message: boolean;
  morada: boolean;
  localidade: boolean;
  motivoReclamacao: boolean;
  comentarios: boolean;
  localidadeAvaria: boolean;
  concelhoAvaria: boolean;
  pontosDeReferencia: boolean;
};

export const FormReclamacoesIluminacaoPublica = () => {
  const KEY_RECAPTCHA = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const [captcha, setCaptcha] = useState<string | null>();
  const [pedido, setPedido] = React.useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [morada, setMorada] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [localidadeAvaria, setLocalidadeAvaria] = useState("");
  const [concelhoAvaria, setConcelhoAvaria] = useState("");
  const [email, setEmail] = useState("");
  const [pontosDeReferencia, setPontosDeReferencia] = useState("");
  const [portaInical, setPortaInicial] = useState("");
  const [portaFinal, setPortaFinal] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    nome: false,
    morada: false,
    localidade: false,
    codigoPostal: false,
    email: false,
    localidadeAvaria: false,
    concelhoAvaria: false,
    pontosDeReferencia: false,
    message: false,
    telefone: false,
    pedido: false,
  });
  const noErrors = () => {
    setErrors({
      nome: false,
      morada: false,
      localidade: false,
      codigoPostal: false,
      email: false,
      localidadeAvaria: false,
      concelhoAvaria: false,
      pontosDeReferencia: false,
      message: false,
      telefone: false,
      pedido: false,
    });
  };
  const [alertDisplay, setAlertDisplay] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("");
  const handleAlertClose = (event: React.SyntheticEvent) => {
    setAlertDisplay(false);
  };

  const handlePedidoChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value as string;
    if (selectedValue === "" || selectedValue === null || selectedValue === undefined) {
      setErrors({ ...errors, pedido: true });
    } else {
      setErrors({ ...errors, pedido: false });
      setErrors({ ...errors, pedido: false });
    }
    setPedido(selectedValue);
  };
  const onlyAllowLetters = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const sanitizedValue = input.value.replace(/[^a-zA-Z\s]/g, "");
    input.value = sanitizedValue;
  };
  const handleTelefoneInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = e.target;
    const numericValue = input.value.replace(/\D/g, "");
    const formattedValue = numericValue;
    input.value = formattedValue;

    if (formattedValue !== "") {
      setErrors({ ...errors, telefone: formattedValue.length !== 9 });
    } else {
      setErrors({ ...errors, telefone: false });
    }

    setTelefone(formattedValue);
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
  const handleCPInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const numericValue = input.value.replace(/\D/g, "");
    let formattedValue = "";
    if (numericValue.length > 4) {
      formattedValue =
        numericValue.slice(0, 4) + "-" + numericValue.slice(4, 7);
    } else {
      formattedValue = numericValue;
    }
    input.value = formattedValue;
    if (formattedValue.length === 8) {
      setCodigoPostal(formattedValue);
      setErrors({ ...errors, codigoPostal: false });
    } else {
      setCodigoPostal("");
      setErrors({ ...errors, codigoPostal: true });
    }
  };
  const handleCPKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    if (
      e.key === "Backspace" &&
      input.value.length === 6 &&
      input.value[4] === "-"
    ) {
      input.value = input.value.slice(0, 4) + input.value.slice(5);
      setCodigoPostal(input.value);
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
    const successStatus = localStorage.getItem("formSubmitSuccess");
    if (successStatus === "true") {
      setAlertDisplay(true);
      setAlertSeverity("success");
      localStorage.removeItem("formSubmitSuccess");
      setLoading(false);
    }
  }, []);

  const handleSubmit = async () => {
    if (
      nome &&
      morada &&
      localidade &&
      codigoPostal &&
      email &&
      localidadeAvaria &&
      concelhoAvaria &&
      pontosDeReferencia &&
      message &&
      pedido !== "" &&
      captcha != null
    ) {
      setLoading(true);
      noErrors();
      const formData = new FormData();
      formData.append("Name", nome);
      formData.append("Address", morada);
      formData.append("Locality", localidade);
      formData.append("PostalCode", codigoPostal);
      formData.append("PhoneNumber", telefone);
      formData.append("Email", email);
      formData.append("DamageLocality", localidadeAvaria);
      formData.append("MunicipalityDamage", concelhoAvaria);
      formData.append("ReferencePoints", pontosDeReferencia);
      formData.append("DarkStreet", pedido);
      formData.append("StartDoor", portaInical);
      formData.append("EndDoor", portaFinal);
      formData.append("Comments", message);
      files.forEach((file) => {
        formData.append("Attachments", file);
      });
      try {
        const response = await fetch(url, {
          method: "POST",
          body: formData,
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
    } else {
      setErrors({
        nome: !nome,
        morada: !morada,
        localidade: !localidade,
        codigoPostal: !codigoPostal,
        email: !email,
        localidadeAvaria: !localidadeAvaria,
        concelhoAvaria: !concelhoAvaria,
        pontosDeReferencia: !pontosDeReferencia,
        message: !message,
        telefone: telefone.length !== 9 && telefone.length !== 0,
        pedido: pedido == null || pedido === "",
      });
      setAlertDisplay(true);
      setAlertSeverity("error");
    }
  };
  return (
    <>
      <Container sx={form}>
        <Container sx={form_wrapper}>
          <Box sx={form_sectionTitle}>Identificação de contacto</Box>
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
            <FormTextField_AllowAll
              title={"Morada"}
              placeholder={"A sua morada"}
              error={errors.morada}
              maxLength={LENGTH_MORADA}
              onInputChange={(e) => handleInputChange(e, "morada", setMorada)}
              onInput={onlyAllowLetters}
              isOpcional={false}
            />
          </Box>
          <Box sx={form_row}>
            <FormTextField_AllowAll
              title={"Localidade"}
              placeholder={"A sua localidade"}
              error={errors.localidade}
              maxLength={LENGTH_LOCALIDADE}
              onInputChange={(e) =>
                handleInputChange(e, "localidade", setLocalidade)
              }
              onInput={onlyAllowLetters}
              isOpcional={false}
            />
            <Box sx={form_row}>
              <FormTextField_CodigoPostal
                title={"Código Postal"}
                placeholder={"0000-000"}
                error={errors.codigoPostal}
                maxLength={8}
                isOpcional={false}
                onInput={handleCPInput}
                onKeyDown={handleCPKeyDown}
                onInputChange={setCodigoPostal}
              />
            </Box>
          </Box>
          <Box sx={form_row}>
            <FormTextField_Email
              title={"E-mail"}
              placeholder={"O seu e-mail"}
              error={errors.email}
              maxLength={LENGTH_EMAIL}
              onInputChange={handleEmailInputChange}
              isOpcional={false}
            />
            <Box sx={form_row}>
              <FormTextField_Number
                title={"Contacto telefónico"}
                placeholder={"Contacto"}
                error={errors.telefone}
                maxLength={LENGTH_TELEFONE}
                onInput={handleTelefoneInputChange}
                onInputChange={setTelefone}
                isOpcional={true}
              />
            </Box>
          </Box>

          <Box sx={form_sectionTitle}>Identificação do local da avaria</Box>

          <Box sx={form_row}>
            <FormTextField_AllowAll
              title={"Localidade"}
              placeholder={"Localidade"}
              error={errors.localidadeAvaria}
              maxLength={LENGTH_LOCALIDADE}
              onInputChange={(e) =>
                handleInputChange(e, "localidadeAvaria", setLocalidadeAvaria)
              }
              onInput={onlyAllowLetters}
              isOpcional={false}
            />

            <FormTextField_AllowAll
              title={"Concelho"}
              placeholder={"Concelho"}
              error={errors.concelhoAvaria}
              maxLength={LENGTH_CONCELHO}
              onInputChange={(e) =>
                handleInputChange(e, "concelhoAvaria", setConcelhoAvaria)
              }
              onInput={onlyAllowLetters}
              isOpcional={false}
            />
          </Box>
          <FormTextField_AllowAll
            title={"Pontos de referência"}
            placeholder={"Ex: Junto à igreja, escolas, etc"}
            error={errors.pontosDeReferencia}
            maxLength={LENGTH_DESCRIPTION}
            onInputChange={(e) =>
              handleInputChange(e, "pontosDeReferencia", setPontosDeReferencia)
            }
            onInput={onlyAllowLetters}
            isOpcional={false}
          />

          <Box sx={form_row}>
            <Box sx={form_textStacker}>
              <Box sx={form_textRow}>
                <Typography sx={form_text}>Rua às escuras?</Typography>
                <Typography sx={form_mandatoryLabel}></Typography>
              </Box>
              <FormControl fullWidth error={errors.pedido}>
                <InputLabel
                  id="TipoDePedido"
                  shrink={true}
                  sx={{
                    opacity: 0,
                  }}
                >
                  Tipo de pedido
                </InputLabel>
                <Select
                  labelId="TipoDePedido"
                  id="pedido"
                  value={pedido}
                  IconComponent={CaretDown}
                  onChange={handlePedidoChange}
                >
                  <MenuItem value="">Selecionar...</MenuItem>
                  <MenuItem value={0}>Sim</MenuItem>
                  <MenuItem value={1}>Não</MenuItem>
                </Select>

                <Typography
                  sx={{
                    ...form_validationMsg,
                    opacity: errors.pedido ? 1 : 0,
                  }}
                >
                  Por favor, preencha este campo corretamente.
                </Typography>
              </FormControl>
            </Box>
            <Box sx={form_textStacker}>
              <Box sx={form_textRow}>
                <Typography sx={form_text}>
                  Localizado entre os números da porta
                </Typography>
                <Typography sx={form_mandatoryLabel}>(opcional)</Typography>
              </Box>
              <Box sx={{ ...form_row, alignItems: "center" }}>
                <TextField
                  id="outlined-basic"
                  placeholder="Nº"
                  variant="outlined"
                  inputProps={{ maxLength: LENGTH_PORTA }}
                  onChange={(e) => setPortaInicial(e.target.value)}
                />
                <Typography
                  sx={{ ...form_text, margin: "0", width: "unset !important" }}
                >
                  a
                </Typography>
                <TextField
                  id="outlined-basic"
                  placeholder="Nº"
                  variant="outlined"
                  inputProps={{ maxLength: LENGTH_PORTA }}
                  onChange={(e) => setPortaFinal(e.target.value)}
                />
              </Box>
            </Box>
          </Box>

          <FormTextField_Multiline
            title={"Descrição da ocorrência"}
            placeholder={
              "Informação complementar que facilite a localização das avarias."
            }
            error={errors.message}
            maxLength={LENGTH_COMENTARIOS}
            onInputChange={(e) => handleInputChange(e, "message", setMessage)}
            onInput={onlyAllowLetters}
            isOpcional={false}
          />
          <Form_FileUpload files={files} setFiles={setFiles} />
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
              <PaperPlaneTilt size={24} color={PALETTE.BLACK} />
            )
          }
          onClick={handleSubmit}
          disabled={loading}
        >
          Enviar reclamação
        </Button>
      </Container>
      <FormAlert
        severity={alertSeverity}
        alertDisplay={alertDisplay}
        handleClose={handleAlertClose}
        sucessMessage={
          "Consulte a sua caixa de e-mail, e siga as instruções para confirmar a sua reclamação, de forma a que possamos dar seguimento à mesma. Obrigado!"
        }
      />
    </>
  );
};
