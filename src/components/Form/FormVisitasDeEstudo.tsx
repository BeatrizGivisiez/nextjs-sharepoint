"use client";
import { ChangeEvent, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { PALETTE } from "@/app/theme/styles/constantes";
import { baseURL } from "@/util/baseURL";
import { Box, Button, CircularProgress, Container } from "@mui/material";
import { PaperPlaneTilt } from "@phosphor-icons/react";

import { LENGTH_EMAIL, LENGTH_MESSAGE, LENGTH_NAME } from "./constants";
import { FormAlert } from "./FormAlert";
import {
  FormTextField,
  FormTextField_Email,
  FormTextField_Multiline,
} from "./FormTextField";
import { form, form_button, form_textStacker, form_wrapper } from "./styles";

const url = `${baseURL}/Form/AddFieldTripRequest`;
export type FormErrors = {
  nome: boolean;
  email: boolean;
  mensagem: boolean;
};

export const FormVisitasDeEstudo = () => {
  const KEY_RECAPTCHA = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const [captcha, setCaptcha] = useState<string | null>();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    nome: false,
    email: false,
    mensagem: false,
  });
  const noErrors = () => {
    setErrors({
      nome: false,
      email: false,
      mensagem: false,
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
    if (nome && email && mensagem) {
      if (captcha != null) {
        setLoading(true);
        noErrors();
        const formData = new FormData();
        formData.append("Name", nome);
        formData.append("Email", email);
        formData.append("Message", mensagem);

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
        email: !email,
        mensagem: !mensagem,
      });
      setAlertDisplay(true);
      setAlertSeverity("error");
    }
  };

  return (
    <>
      <Container sx={form}>
        <Container sx={form_wrapper}>
          <FormTextField
            title={"Nome Completo"}
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

          <FormTextField_Multiline
            title={"Mensagem"}
            placeholder={"A sua mensagem"}
            error={errors.mensagem}
            maxLength={LENGTH_MESSAGE}
            onInputChange={(e) => handleInputChange(e, "mensagem", setMensagem)}
            onInput={onlyAllowLetters}
            isOpcional={false}
          />
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
          Enviar pedido de agendamento
        </Button>
      </Container>
      <FormAlert
        severity={alertSeverity}
        alertDisplay={alertDisplay}
        handleClose={handleAlertClose}
        sucessMessage={
          "Consulte a sua caixa de e-mail e siga as instruções para confirmar o seu pedido de visita de estudo, para darmos seguimento ao mesmo. Obrigado!"
        }
      />
    </>
  );
};
