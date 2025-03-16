"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { PALETTE } from "@/app/theme/styles/constantes";
import { baseURL } from "@/util/baseURL";
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
  Typography,
} from "@mui/material";
import { CaretDown, Paperclip, PaperPlaneTilt } from "@phosphor-icons/react";

import { buttonactionicon_label } from "../ButtonActionIcon/styles";
import {
  LENGTH_CONCELHO,
  LENGTH_EMAIL,
  LENGTH_LOCALIDADE,
  LENGTH_MORADA,
  LENGTH_NAME,
  LENGTH_NIFNIPC,
  LENGTH_NUM_INSTALACOES,
  LENGTH_POTENCIA_REQUERIDA,
  LENGTH_TELEFONE,
} from "./constants";
import { FormAlert } from "./FormAlert";
import {
  FormTextField,
  FormTextField_AllowAll,
  FormTextField_CodigoPostal,
  FormTextField_Email,
  FormTextField_Number,
} from "./FormTextField";
import {
  form,
  form_anexoBtn,
  form_button,
  form_mandatoryLabel,
  form_mandatoryText,
  form_row,
  form_sectionTitle,
  form_text,
  form_textRow,
  form_textStacker,
  form_uploadFilesBox,
  form_validationMsg,
  form_wrapper,
} from "./styles";
import { FormErrors } from "./types";
import { Form_FileUpload } from "./Form_FileUpload";

const url = `${baseURL}/Form/AddEnergySupplyRequest`;
export const FormPedidoDeFornecimentoDeEnergia = () => {
  const KEY_RECAPTCHA = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const [captcha, setCaptcha] = useState<string | null>();

  const [nome, setNome] = useState("");
  const [morada, setMorada] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [concelho, setConcelho] = useState("");
  const [nif, setNif] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [pedido, setPedido] = React.useState("");
  const [nomeContacto, setNomeContacto] = useState("");
  const [moradaContacto, setMoradaContacto] = useState("");
  const [localidadeContacto, setLocalidadeContacto] = useState("");
  const [concelhoContacto, setConcelhoContacto] = useState("");
  const [emailContacto, setEmailContacto] = useState("");
  const [telefoneContacto, setTelefoneContacto] = useState("");
  const [codigoPostalContacto, setCodigoPostalContacto] = useState("");

  const [moradaPredio, setMoradaPredio] = useState("");
  const [localidadePredio, setLocalidadePredio] = useState("");
  const [concelhoPredio, setConcelhoPredio] = useState("");
  const [codigoPostalPredio, setCodigoPostalPredio] = useState("");
  const [numInstalacoesDeUtilizacao, setNumInstalacoesDeUtilizacao] =
    useState("");
  const [potenciaTotalRequerida, setPotenciaTotalRequerida] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    nome: false,
    morada: false,
    localidade: false,
    concelho: false,
    codigoPostal: false,
    nif: false,
    email: false,
    telefone: false,
    pedido: false,
    nomeContacto: false,
    moradaContacto: false,
    localidadeContacto: false,
    concelhoContacto: false,
    codigoPostalContacto: false,
    emailContacto: false,
    telefoneContacto: false,

    moradaPredio: false,
    localidadePredio: false,
    concelhoPredio: false,
    codigoPostalPredio: false,
    numInstalacoesDeUtilizacao: false,
    potenciaTotalRequerida: false,
  });
  const noErrors = () => {
    setErrors({
      nome: false,
      morada: false,
      localidade: false,
      concelho: false,
      codigoPostal: false,
      nif: false,
      email: false,
      telefone: false,
      pedido: false,
      nomeContacto: false,
      moradaContacto: false,
      localidadeContacto: false,
      concelhoContacto: false,
      codigoPostalContacto: false,
      emailContacto: false,
      telefoneContacto: false,

      moradaPredio: false,
      localidadePredio: false,
      concelhoPredio: false,
      codigoPostalPredio: false,
      numInstalacoesDeUtilizacao: false,
      potenciaTotalRequerida: false,
    });
  };
  const [alertDisplay, setAlertDisplay] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("");
  const handleAlertClose = (event: React.SyntheticEvent) => {
    setAlertDisplay(false);
  };

  const handlePedidoChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value as string;
    if (
      selectedValue === "" ||
      selectedValue === null ||
      selectedValue === undefined
    ) {
      setErrors({ ...errors, pedido: true });
    } else {
      setErrors({ ...errors, pedido: false });
    }
    setPedido(selectedValue);
  };
  const onlyAllowLetters = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const sanitizedValue = input.value.replace(/[^a-zA-Z\s]/g, "");
    input.value = sanitizedValue;
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
  const handleCPPredioInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      setCodigoPostalPredio(formattedValue);
      setErrors({ ...errors, codigoPostalPredio: false });
    } else {
      setCodigoPostalPredio("");
      setErrors({ ...errors, codigoPostalPredio: true });
    }
  };
  const handleCPContactoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    if (formattedValue.length === 8 || formattedValue.length === 0) {
      setCodigoPostalContacto(formattedValue);
      setErrors({ ...errors, codigoPostalContacto: false });
    } else {
      setCodigoPostalContacto("");
      setErrors({ ...errors, codigoPostalContacto: true });
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
  const handleCPPredioKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    if (
      e.key === "Backspace" &&
      input.value.length === 6 &&
      input.value[4] === "-"
    ) {
      input.value = input.value.slice(0, 4) + input.value.slice(5);
      setCodigoPostalPredio(input.value);
    }
  };
  const handleCPContactoKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const input = e.target as HTMLInputElement;
    if (
      e.key === "Backspace" &&
      input.value.length === 6 &&
      input.value[4] === "-"
    ) {
      input.value = input.value.slice(0, 4) + input.value.slice(5);
      setCodigoPostalContacto(input.value);
    }
  };
  const handleNifInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const numericValue = input.value.replace(/\D/g, "");
    const formattedValue = numericValue;
    input.value = formattedValue;

    if (formattedValue !== "") {
      setErrors({ ...errors, nif: formattedValue.length !== 9 });
    } else {
      setErrors({ ...errors, nif: false });
    }
    setNif(formattedValue);
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
  const handleEmailContactoInputChange = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(value);
    if (!isValidEmail && value.length > 0) {
      setErrors({ ...errors, emailContacto: true });
    } else {
      setErrors({ ...errors, emailContacto: false });
    }
    setEmailContacto(isValidEmail ? value : "");
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
  const handleTelefoneContactoInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = e.target;
    const numericValue = input.value.replace(/\D/g, "");
    const formattedValue = numericValue;
    input.value = formattedValue;

    if (formattedValue !== "") {
      setErrors({ ...errors, telefoneContacto: formattedValue.length !== 9 });
    } else {
      setErrors({ ...errors, telefoneContacto: false });
    }

    setTelefoneContacto(formattedValue);
  };
  const handleNumInstalacoesInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = e.target;
    const numericValue = input.value.replace(/\D/g, "");
    const formattedValue = numericValue;
    input.value = formattedValue;

    if (formattedValue.length === 0) {
      setNumInstalacoesDeUtilizacao("");
      setErrors({ ...errors, numInstalacoesDeUtilizacao: true });
    } else {
      setNumInstalacoesDeUtilizacao(formattedValue);
      setErrors({ ...errors, numInstalacoesDeUtilizacao: false });
    }
  };

  const handlePotenciaTotalRequeridaInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = e.target;
    const regex = /[^0-9,]/g;
    const numericValue = input.value.replace(regex, "");
    const countComma =
      numericValue.match(new RegExp(",", "g") || [])?.length ?? 0;
    if (countComma > 1) {
      input.value = numericValue.substring(0, numericValue.length - 1);
      return;
    }

    const formattedValue = numericValue;
    input.value = formattedValue;


    if (formattedValue.length === 0) {
      setPotenciaTotalRequerida("");
      setErrors({ ...errors, potenciaTotalRequerida: true });
    } else {
      setPotenciaTotalRequerida(formattedValue);
      setErrors({ ...errors, potenciaTotalRequerida: false });
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(emailContacto);
    console.log("pedido: " + pedido);
    if (
      nome &&
      morada &&
      localidade &&
      concelho &&
      codigoPostal &&
      nif &&
      email &&
      moradaPredio &&
      localidadePredio &&
      concelhoPredio &&
      codigoPostalPredio &&
      numInstalacoesDeUtilizacao &&
      potenciaTotalRequerida &&
      pedido !== ""
    ) {
      if (captcha != null) {
        setLoading(true);
        setLoading(true);
        noErrors();
        const formData = new FormData();
        formData.append("RequestType", pedido);
        console.log("pedido: " + pedido);
        formData.append("RequesterName", nome);
        formData.append("RequesterAddress", morada);
        formData.append("RequesterLocality", localidade);
        formData.append("RequesterMunicipality", concelho);
        formData.append("RequesterPostalCode", codigoPostal);
        formData.append("RequesterPhoneNumber", telefone);
        formData.append("RequesterNIForNIPC", nif);
        formData.append("RequesterEmail", email);
        formData.append("ContactName", nomeContacto);
        formData.append("ContactAddress", moradaContacto);
        formData.append("ContactLocality", localidadeContacto);
        formData.append("ContactPostalCode", codigoPostalContacto);
        formData.append("ContactMunicipality", concelhoContacto);
        formData.append("ContactPhoneNumber", telefoneContacto);
        formData.append("ContactEmail", emailContacto);
        formData.append("BuildingAddress", moradaPredio);
        formData.append("BuildingLocality", localidadePredio);
        formData.append("BuildingMunicipality", concelhoPredio);
        formData.append("BuildingPostalCode", codigoPostalPredio);
        formData.append("NumberOfInstallations", numInstalacoesDeUtilizacao);
        formData.append("RequestedPower", potenciaTotalRequerida);
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
      }
    } else {
      setErrors({
        nome: !nome,
        morada: !morada,
        localidade: !localidade,
        concelho: !concelho,
        codigoPostal: !codigoPostal,
        nif: !nif,
        email: !email,
        telefone: telefone.length !== 9 && telefone.length !== 0,
        nomeContacto: !nomeContacto,
        moradaContacto: !moradaContacto,
        localidadeContacto: !localidadeContacto,
        concelhoContacto: !concelhoContacto,
        codigoPostalContacto:
          codigoPostalContacto.length !== 8 &&
          codigoPostalContacto.length !== 0,
        emailContacto: !isValidEmail && emailContacto.length !== 0,
        telefoneContacto:
          telefoneContacto.length !== 9 && telefoneContacto.length !== 0,
        moradaPredio: !moradaPredio,
        localidadePredio: !localidadePredio,
        concelhoPredio: !concelhoPredio,
        codigoPostalPredio: !codigoPostalPredio,
        numInstalacoesDeUtilizacao: numInstalacoesDeUtilizacao.length === 0,
        potenciaTotalRequerida: potenciaTotalRequerida.length === 0,
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
          <Box sx={form_row}>
            <Box sx={form_textStacker}>
              <Box sx={form_textRow}>
                <Typography sx={form_text}>Tipo de pedido</Typography>
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
                  <MenuItem value={0}>Obras</MenuItem>
                  <MenuItem value={1}>Vivenda unifamiliar</MenuItem>
                  <MenuItem value={2}>Edifício coletivo</MenuItem>
                  <MenuItem value={3}>Outras</MenuItem>
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
            <Box></Box>
          </Box>

          <Box sx={{ ...form_sectionTitle, mt: "0px" }}>
            Identificação do Requerente
          </Box>

          <FormTextField
            title={"Nome"}
            placeholder={"O seu nome"}
            error={errors.nome}
            maxLength={LENGTH_NAME}
            onInputChange={(e) => handleInputChange(e, "nome", setNome)}
            onInput={onlyAllowLetters}
            isOpcional={false}
          />

          <Box sx={form_row}>
            <FormTextField_AllowAll
              title={"Morada"}
              placeholder={"A sua morada"}
              error={errors.morada}
              maxLength={LENGTH_MORADA}
              onInputChange={(e) => handleInputChange(e, "morada", setMorada)}
              onInput={onlyAllowLetters}
              isOpcional={false}
            />
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
          </Box>

          <Box sx={form_row}>
            <FormTextField_AllowAll
              title={"Concelho"}
              placeholder={"Concelho"}
              error={errors.concelho}
              maxLength={LENGTH_CONCELHO}
              onInputChange={(e) =>
                handleInputChange(e, "concelho", setConcelho)
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

              <FormTextField_Number
                title={"NIF ou NIPC"}
                placeholder={"O seu NIF ou NIPC"}
                error={errors.nif}
                maxLength={LENGTH_NIFNIPC}
                onInput={handleNifInputChange}
                onInputChange={(e) => handleInputChange(e, "nif", setNif)}
                isOpcional={false}
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
            <Box sx={form_textRow}>
              <FormTextField_Number
                title={"Telefone ou telemóvel"}
                placeholder={"Contacto"}
                error={errors.telefone}
                maxLength={LENGTH_TELEFONE}
                onInput={handleTelefoneInputChange}
                onInputChange={setTelefone}
                isOpcional={true}
              />
            </Box>
          </Box>

          <Box sx={form_sectionTitle}>Identificação da Pessoa de Contacto</Box>

          <FormTextField
            title={"Nome"}
            placeholder={"O seu nome"}
            error={false}
            maxLength={LENGTH_NAME}
            onInputChange={setNomeContacto}
            onInput={onlyAllowLetters}
            isOpcional={true}
          />

          <Box sx={form_row}>
            <FormTextField_AllowAll
              title={"Morada"}
              placeholder={"A sua morada"}
              error={false}
              maxLength={LENGTH_MORADA}
              onInputChange={setMoradaContacto}
              onInput={onlyAllowLetters}
              isOpcional={true}
            />
            <FormTextField_AllowAll
              title={"Localidade"}
              placeholder={"A sua localidade"}
              error={false}
              maxLength={LENGTH_LOCALIDADE}
              onInputChange={setLocalidadeContacto}
              onInput={onlyAllowLetters}
              isOpcional={true}
            />
          </Box>

          <Box sx={form_row}>
            <FormTextField_AllowAll
              title={"Concelho"}
              placeholder={"O seu concelho"}
              error={false}
              maxLength={LENGTH_MORADA}
              onInputChange={setConcelhoContacto}
              onInput={onlyAllowLetters}
              isOpcional={true}
            />
            <Box sx={form_row}>
              <FormTextField_CodigoPostal
                title={"Código Postal"}
                placeholder={"0000-000"}
                error={errors.codigoPostalContacto}
                maxLength={8}
                isOpcional={true}
                onInput={handleCPContactoInput}
                onKeyDown={handleCPContactoKeyDown}
                onInputChange={setCodigoPostalContacto}
              />
            </Box>
          </Box>
          <Box sx={form_row}>
            <FormTextField_Email
              title={"E-mail"}
              placeholder={"O seu e-mail"}
              error={errors.emailContacto}
              maxLength={LENGTH_EMAIL}
              onInputChange={handleEmailContactoInputChange}
              isOpcional={true}
            />
            <Box sx={form_textRow}>
              <FormTextField_Number
                title={"Telefone ou telemóvel"}
                placeholder={"Contacto"}
                error={errors.telefoneContacto}
                maxLength={LENGTH_TELEFONE}
                onInput={handleTelefoneContactoInputChange}
                onInputChange={setTelefoneContacto}
                isOpcional={true}
              />
            </Box>
          </Box>

          <Box sx={form_sectionTitle}>Localização do Prédio</Box>

          <Box sx={form_row}>
            <FormTextField_AllowAll
              title={"Morada"}
              placeholder={"A sua morada"}
              error={errors.moradaPredio}
              maxLength={LENGTH_MORADA}
              onInputChange={(e) =>
                handleInputChange(e, "moradaPredio", setMoradaPredio)
              }
              onInput={onlyAllowLetters}
              isOpcional={false}
            />
            <FormTextField_AllowAll
              title={"Localidade"}
              placeholder={"A sua localidade"}
              error={errors.localidadePredio}
              maxLength={LENGTH_LOCALIDADE}
              onInputChange={(e) =>
                handleInputChange(e, "localidadePredio", setLocalidadePredio)
              }
              onInput={onlyAllowLetters}
              isOpcional={false}
            />
          </Box>

          <Box sx={form_row}>
            <FormTextField_AllowAll
              title={"Concelho"}
              placeholder={"O seu concelho"}
              error={errors.concelhoPredio}
              maxLength={LENGTH_CONCELHO}
              onInputChange={(e) =>
                handleInputChange(e, "concelhoPredio", setConcelhoPredio)
              }
              onInput={onlyAllowLetters}
              isOpcional={false}
            />
            <Box sx={form_row}>
              <FormTextField_CodigoPostal
                title={"Código Postal"}
                placeholder={"0000-000"}
                error={errors.codigoPostalPredio}
                maxLength={8}
                isOpcional={false}
                onInput={handleCPPredioInput}
                onKeyDown={handleCPPredioKeyDown}
                onInputChange={setCodigoPostalPredio}
              />
            </Box>
          </Box>

          <Box sx={form_sectionTitle}>Outras informações</Box>
          <Box sx={form_row}>
            <FormTextField_Number
              title={"Número de instalações de utilização"}
              placeholder={"0"}
              error={errors.numInstalacoesDeUtilizacao}
              maxLength={LENGTH_NUM_INSTALACOES}
              onInput={handleNumInstalacoesInputChange}
              onInputChange={setNumInstalacoesDeUtilizacao}
              isOpcional={false}
            />
            <Box sx={form_textStacker}>
              <FormTextField_Number
                title={"Potência total requerida kVA*"}
                placeholder={"0"}
                error={errors.potenciaTotalRequerida}
                maxLength={LENGTH_POTENCIA_REQUERIDA}
                onInput={handlePotenciaTotalRequeridaInputChange}
                onInputChange={setPotenciaTotalRequerida}
                isOpcional={false}
                customInputProps={{ step: 0.01 }}
              />
              <Typography sx={form_mandatoryText}>
                *Aconselhamos a obtenção desta informação junto do seu
                eletricista.
              </Typography>
            </Box>
          </Box>

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
          Enviar pedido
        </Button>
      </Container>
      <FormAlert
        severity={alertSeverity}
        alertDisplay={alertDisplay}
        handleClose={handleAlertClose}
        sucessMessage={
          "Consulte a sua caixa de e-mail e siga as instruções para confirmar o seu pedido de fornecimento de energia, para darmos seguimento ao mesmo. Obrigado!"
        }
      />
    </>
  );
};
