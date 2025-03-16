"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { PALETTE } from "@/app/theme/styles/constantes";
import { baseURL } from "@/util/baseURL";
const url = `${baseURL}/Form/addDamageComplaint`;
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import {
  form_wrapper,
  form_textStacker,
  form_row,
  form_text,
  form_textRow,
  form,
  form_button,
  form_sectionTitle,
  form_mandatoryLabel,
} from "./styles";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import {
  LENGTH_CODIGOID,
  LENGTH_COMENTARIOS,
  LENGTH_DESCRIPTION,
  LENGTH_EMAIL,
  LENGTH_NAME,
  LENGTH_TELEFONE,
} from "./constants";
import { FormAlert } from "./FormAlert";
import {
  FormTextField,
  FormTextField_AllowAll,
  FormTextField_CodigoId,
  FormTextField_Email,
  FormTextField_Multiline,
  FormTextField_Number,
} from "./FormTextField";
import { FormErrors } from "./types";
import { Form_FileUpload } from "./Form_FileUpload";
import { Form_DatePicker } from "./Form_DatePicker";
import { Form_HourPicker_end, Form_HourPicker_start } from "./Form_HourPicker";
import dayjs from "dayjs";

export const FormReclamacoesPrejuizosCausados = () => {
  const KEY_RECAPTCHA = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const [captcha, setCaptcha] = useState<string | null>();
  const [nomeContacto, setNomeContacto] = useState("");
  const [nomeTitular, setNomeTitular] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [equipamentosDanificados, setEquipamentosDanificados] = useState("");
  const [message, setMessage] = useState("");
  const [codigoId, setCodigoId] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFim, setHoraFim] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    nomeTitular: false,
    nomeContacto: false,
    email: false,
    equipamentosDanificados: false,
    message: false,
    telefone: false,
    codigoId: false,
    dataInicio: false,
    dataFim: false,
    horaInicio: false,
    horaFim: false,
  });
  const noErrors = () => {
    setErrors({
      nomeTitular: false,
      nomeContacto: false,
      email: false,
      equipamentosDanificados: false,
      message: false,
      telefone: false,
      codigoId: false,
      dataInicio: false,
      dataFim: false,
      horaInicio: false,
      horaFim: false,
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

  const handleDataInicioChange = (value: string | null) => {
    setDataInicio(value || "");
    setErrors((prevErrors) => ({
      ...prevErrors,
      dataInicio: false,
      dataFim:
        prevErrors.dataFim &&
        dayjs(value, "DD/MM/YYYY").isAfter(dayjs(dataFim, "DD/MM/YYYY")),
    }));
    if (
      dataInicio &&
      dayjs(value, "DD/MM/YYYY").isAfter(dayjs(dataFim, "DD/MM/YYYY"))
    ) {
      setDataFim("");
    }
  };

  const handleDataFimChange = (value: string | null) => {
    setDataFim(value || "");
    setErrors((prevErrors) => ({
      ...prevErrors,
      dataFim: false,
      dataInicio:
        prevErrors.dataInicio &&
        dayjs(value, "DD/MM/YYYY").isBefore(dayjs(dataInicio, "DD/MM/YYYY")),
    }));
    if (
      dataFim &&
      dayjs(value, "DD/MM/YYYY").isBefore(dayjs(dataInicio, "DD/MM/YYYY"))
    ) {
      setDataInicio("");
    }
  };

  const handleHoraInicioChange = (value: string | null) => {
    setHoraInicio(value || "");
    if (dataInicio === dataFim && value && horaFim) {
      const isInvalid = dayjs(value, "HH:mm").isAfter(dayjs(horaFim, "HH:mm"));
      setErrors((prevErrors) => ({
        ...prevErrors,
        horaInicio: isInvalid,
        horaFim: isInvalid,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        horaInicio: false,
      }));
    }
  };
  
  const handleHoraFimChange = (value: string | null) => {
    setHoraFim(value || "");
    if (dataInicio === dataFim && horaInicio && value) {
      const isInvalid = dayjs(value, "HH:mm").isBefore(dayjs(horaInicio, "HH:mm"));
      setErrors((prevErrors) => ({
        ...prevErrors,
        horaFim: isInvalid,
        horaInicio: isInvalid,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        horaFim: false,
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
    const successStatus = localStorage.getItem("formSubmitSuccess");
    if (successStatus === "true") {
      setAlertDisplay(true);
      setAlertSeverity("success");
      localStorage.removeItem("formSubmitSuccess");
      setLoading(false);
    }
  }, []);

  const handleSubmit = async () => {

    const isInvalidTimeWindow =
    dataInicio === dataFim &&
    (dayjs(horaInicio, "HH:mm").isAfter(dayjs(horaFim, "HH:mm")) ||
      dayjs(horaFim, "HH:mm").isBefore(dayjs(horaInicio, "HH:mm")));

    if (
      nomeContacto &&
      nomeTitular &&
      codigoId &&
      email &&
      message &&
      equipamentosDanificados &&
      dataInicio &&
      dataFim &&
      horaInicio &&
      horaFim &&
      captcha != null &&
      !isInvalidTimeWindow
    ) {
      setLoading(true);
      noErrors();
      const formData = new FormData();
      formData.append("LocalConsumptionCodeId", codigoId);
      formData.append("ContractHolderName", nomeTitular);
      formData.append("Name", nomeContacto);
      formData.append("PhoneNumber", telefone);
      formData.append("Email", email);
      formData.append("BeginDate", dataInicio);
      formData.append("EndDate", dataFim);
      formData.append("BeginTime", horaInicio);
      formData.append("EndTime", horaFim);
      formData.append("DamagedEquipment", equipamentosDanificados);
      formData.append("Description", message);
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
        nomeContacto: !nomeContacto,
        nomeTitular: !nomeTitular,
        email: !email,
        equipamentosDanificados: !equipamentosDanificados,
        codigoId: codigoId.length !== 10,
        message: !message,
        telefone: telefone.length !== 9 && telefone.length !== 0,
        dataInicio: !dataInicio,
        dataFim: !dataFim,
        horaInicio: isInvalidTimeWindow || !horaInicio,
        horaFim: isInvalidTimeWindow || !horaFim,
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
          <FormTextField
            title={"Nome"}
            placeholder={"O seu nome"}
            error={errors.nomeContacto}
            maxLength={LENGTH_NAME}
            onInputChange={(e) =>
              handleInputChange(e, "nomeContacto", setNomeContacto)
            }
            onInput={onlyAllowLetters}
            isOpcional={false}
          />
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
              error={errors.nomeTitular}
              maxLength={LENGTH_NAME}
              onInputChange={(e) =>
                handleInputChange(e, "nomeTitular", setNomeTitular)
              }
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

          <Box sx={form_sectionTitle}>
            Informações sobre os prejuízos causados
          </Box>

          <Box sx={form_row}>
            <Form_DatePicker
              title="Data de início"
              onChange={handleDataInicioChange}
              error={errors.dataInicio}
              maxDate={dataFim ? dayjs(dataFim, "DD/MM/YYYY") : undefined}
            />
            <Form_DatePicker
              title="Data de fim"
              onChange={handleDataFimChange}
              error={errors.dataFim}
              minDate={dataInicio ? dayjs(dataInicio, "DD/MM/YYYY") : undefined}
            />
          </Box>

          <Box sx={form_row}>
            <Box sx={{ ...form_row, py: "0px" }}>
              <Form_HourPicker_start
                title="Hora de início"
                onChange={handleHoraInicioChange}
                error={errors.horaInicio}
                minTime={ dataInicio == dataFim  && horaInicio ? dayjs(horaInicio, "HH:mm") : undefined}
                maxTime={ dataInicio == dataFim  && horaFim ? dayjs(horaFim, "HH:mm") : undefined}
              />
              <Form_HourPicker_end
                title="Hora de fim"
                onChange={handleHoraFimChange}
                error={errors.horaFim}
                minTime={ dataInicio == dataFim  && horaInicio ? dayjs(horaInicio, "HH:mm") : undefined}
                maxTime={ dataInicio == dataFim  && horaFim ? dayjs(horaFim, "HH:mm") : undefined}
              />
            </Box>

            <FormTextField_AllowAll
              title={"Equipamentos danificados"}
              placeholder={"Descrição dos equipamentos danificados"}
              error={errors.equipamentosDanificados}
              maxLength={LENGTH_DESCRIPTION}
              onInputChange={(e) =>
                handleInputChange(
                  e,
                  "equipamentosDanificados",
                  setEquipamentosDanificados
                )
              }
              onInput={onlyAllowLetters}
              isOpcional={false}
            />
          </Box>
          <FormTextField_Multiline
            title={"Descrição da ocorrência"}
            description={
              "Indique factos que coloquem em evidência a possibillidade do equipamento de medição poder estar a funcionar fora das margens de erro admitidas regulamentarmente."
            }
            placeholder={"A sua mensagem"}
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
