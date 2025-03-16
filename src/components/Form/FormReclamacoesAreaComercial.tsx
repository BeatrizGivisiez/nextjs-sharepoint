"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { PALETTE } from "@/app/theme/styles/constantes";
import { baseURL } from "@/util/baseURL";
const url = `${baseURL}/Form/AddCommercialComplaint`;
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
  LENGTH_CODIGOID,
  LENGTH_COMENTARIOS,
  LENGTH_EMAIL,
  LENGTH_NAME,
  LENGTH_TELEFONE,
} from "./constants";
import { FormAlert } from "./FormAlert";
import {
  FormTextField,
  FormTextField_CodigoId,
  FormTextField_Email,
  FormTextField_Multiline,
  FormTextField_Number,
} from "./FormTextField";
import { Form_FileUpload } from "./Form_FileUpload";
import { form, form_button, form_mandatoryLabel, form_row, form_text, form_textRow, form_textStacker, form_validationMsg, form_wrapper } from "./styles";

export type FormErrors = {
  nome: boolean;
  email: boolean;
  message: boolean;
  mensagem: boolean;
  morada: boolean;
  localidade: boolean;
  motivoReclamacao: boolean;
  comentarios: boolean;
};

export const FormReclamacoesAreaComercial = () => {
  const KEY_RECAPTCHA = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const [captcha, setCaptcha] = useState<string | null>();
  const [pedido, setPedido] = React.useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [message, setMessage] = useState("");
  const [codigoId, setCodigoId] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    nome: false,
    email: false,
    message: false,
    telefone: false,
    codigoId: false,
    pedido: false,
  });
  const noErrors = () => {
    setErrors({
      nome: false,
      email: false,
      message: false,
      telefone: false,
      codigoId: false,
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
  const handleCodigoIdInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = e.target;
    const numericValue = input.value.replace(/\D/g, "");
    const formattedValue = numericValue;
    input.value = formattedValue;
    if (formattedValue.length !== 10) {
      setErrors({ ...errors, codigoId: true });
    } else {
      setErrors({ ...errors, codigoId: false });
    }
    setCodigoId(formattedValue);
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
    if (codigoId && nome && email && message && pedido !== "" && captcha != null) {
      setLoading(true);
      noErrors();
      const formData = new FormData();
      formData.append("LocalConsumptionCodeId", codigoId);
      formData.append("ContractHolderName", nome);
      formData.append("PhoneNumber", telefone);
      formData.append("Email", email);
      formData.append("Subject", pedido);
      console.log("pedido ou assunto: " + pedido);
      formData.append("ComplaintReason", message);
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
        email: !email,
        message: !message,
        telefone: telefone.length !== 9 && telefone.length !== 0,
        codigoId: codigoId.length !== 10,
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
              <FormTextField_CodigoId
                title={"Código de identificação do local de consumo"}
                placeholder={"Código"}
                error={errors.codigoId}
                maxLength={LENGTH_CODIGOID}
                onInput={handleCodigoIdInputChange}
                onInputChange={setCodigoId}
                isOpcional={false}
              />
            </Box>
            <FormTextField
              title={"Nome do titular do contrato"}
              placeholder={"Nome"}
              error={errors.nome}
              maxLength={LENGTH_NAME}
              onInputChange={(e) => handleInputChange(e, "nome", setNome)}
              onInput={onlyAllowLetters}
              isOpcional={false}
            />
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

          <Box sx={form_row}>
            <Box sx={form_textStacker}>
              <Box sx={form_textRow}>
                <Typography sx={form_text}>Assunto</Typography>
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
                  <MenuItem value={0}>Atendimento</MenuItem>
                  <MenuItem value={1}>Leituras</MenuItem>
                  <MenuItem value={2}>Faturação</MenuItem>
                  <MenuItem value={3}>Cobrança</MenuItem>
                  <MenuItem value={4}>Outras</MenuItem>
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

          <Box sx={form_textStacker}>
            <FormTextField_Multiline
              title={"Motivo da Reclamação"}
              placeholder={"A sua mensagem"}
              error={errors.message}
              maxLength={LENGTH_COMENTARIOS}
              onInputChange={(e) => handleInputChange(e, "message", setMessage)}
              onInput={onlyAllowLetters}
              isOpcional={false}
            />
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
