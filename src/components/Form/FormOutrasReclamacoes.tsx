"use client";
import { ChangeEvent, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { PALETTE } from "@/app/theme/styles/constantes";
import { baseURL } from "@/util/baseURL";
const url = `${baseURL}/Form/AddOtherComplaint`;
import { Box, Button, CircularProgress, Container } from "@mui/material";
import {
  form_wrapper,
  form_textStacker,
  form_row,
  form,
  form_button,
  form_sectionTitle,
} from "./styles";
import { PaperPlaneTilt, Paperclip, X } from "@phosphor-icons/react";
import {
  LENGTH_CODIGOID,
  LENGTH_COMENTARIOS,
  LENGTH_EMAIL,
  LENGTH_LOCALIDADE,
  LENGTH_MORADA,
  LENGTH_MOTIVO,
  LENGTH_NAME,
  LENGTH_TELEFONE,
} from "./constants";
import { FormAlert } from "./FormAlert";
import {
  FormTextField,
  FormTextField_AllowAll,
  FormTextField_CodigoId,
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
  morada: boolean;
  localidade: boolean;
  motivoReclamacao: boolean;
  comentarios: boolean;
};

export const FormOutrasReclamacoes = () => {
  const KEY_RECAPTCHA = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const [captcha, setCaptcha] = useState<string | null>();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [morada, setMorada] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [motivoReclamacao, setMotivoReclamacao] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [telefone, setTelefone] = useState("");
  const [codigoId, setCodigoId] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    nome: false,
    morada: false,
    localidade: false,
    codigoPostal: false,
    email: false,
    motivoReclamacao: false,
    comentarios: false,
    telefone: false,
    codigoId: false,
  });
  const noErrors = () => {
    setErrors({
      nome: false,
      morada: false,
      localidade: false,
      codigoPostal: false,
      email: false,
      motivoReclamacao: false,
      comentarios: false,
      telefone: false,
      codigoId: false,
    });
  };
  const setError = (field: string, value: boolean) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: value,
    }));
  };
  const [alertDisplay, setAlertDisplay] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("");

  const handleAlertClose = (event: React.SyntheticEvent) => {
    setAlertDisplay(false);
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
    if (formattedValue.length !== 10 && formattedValue.length !== 0) {
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
      email &&
      morada &&
      comentarios &&
      localidade &&
      codigoPostal &&
      motivoReclamacao &&
      captcha != null
    ) {
      setLoading(true);
      noErrors();

      const formData = new FormData();
      formData.append("Name", nome);
      formData.append("Address", morada);
      formData.append("Locality", localidade);
      formData.append("PostalCode", codigoPostal);
      formData.append("LocalConsumptionCodeId", codigoId);
      formData.append("PhoneNumber", telefone);
      formData.append("Email", email);
      formData.append("Reason", motivoReclamacao);
      formData.append("Comments", comentarios);
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
        motivoReclamacao: !motivoReclamacao,
        comentarios: !comentarios,
        telefone: telefone.length !== 9 && telefone.length !== 0,
        codigoId: codigoId.length !== 10 && codigoId.length !== 0,
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
              setError={setError}
              maxLength={LENGTH_NAME}
              onInputChange={(e) => handleInputChange(e, "nome", setNome)}
              isOpcional={false}
            />
            <FormTextField_AllowAll
              title={"Morada"}
              placeholder={"A sua morada"}
              error={errors.morada}
              maxLength={LENGTH_MORADA}
              onInputChange={(e) => handleInputChange(e, "morada", setMorada)}
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
          <FormTextField_AllowAll
            title={"Motivo da reclamação"}
            placeholder={"Descrição do motivo"}
            error={errors.motivoReclamacao}
            maxLength={LENGTH_MOTIVO}
            onInputChange={(e) =>
              handleInputChange(e, "motivoReclamacao", setMotivoReclamacao)
            }
            isOpcional={false}
          />
          <FormTextField_Multiline
            title={"Comentários"}
            placeholder={"A sua mensagem"}
            error={errors.comentarios}
            maxLength={LENGTH_COMENTARIOS}
            onInputChange={(e) =>
              handleInputChange(e, "comentarios", setComentarios)
            }
            isOpcional={false}
          />

          <Form_FileUpload files={files} setFiles={setFiles} />

          <Box sx={form_sectionTitle}>
            Preencha o seguinte dado caso o assunto esteja relacionado com a sua
            instalação
          </Box>
          <Box sx={form_row}>
            <Box sx={form_textStacker}>
              <FormTextField_CodigoId
                title={"Código de identificação do local de consumo"}
                placeholder={"Código"}
                error={errors.codigoId}
                maxLength={LENGTH_CODIGOID}
                onInput={handleCodigoIdInputChange}
                onInputChange={setCodigoId}
                isOpcional={true}
              />
            </Box>
          </Box>

          <Box></Box>

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
