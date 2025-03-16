import { Alert, AlertTitle, Box, Container } from "@mui/material";

import { formAlert_display, formAlert_wrapper } from "./styles";
import { FormAlertProps } from "./types";

export const FormAlert = ({
  severity,
  alertDisplay,
  sucessMessage,
  handleClose,
}: FormAlertProps) => {
  let title, message;
  switch (severity) {
    case "success":
      title = "O seu formulário foi submetido! ";
      message = sucessMessage;
      break;
    case "error":
      title = "Oops! Algo correu mal";
      message =
        "Ocorreu um erro ao submeter o formulário. Por favor, confirme os campos que preencheu e tente novamente.";
      break;
    case "info":
      title = "Confirme o seu email";
      message =
        "Foi enviado um e-mail de verificação para a sua caixa de entrada. Por favor, verifique o seu e-mail.";
      break;
    case "warning":
      title = "Algo correu mal...";
      message =
        "Não foi possível processar o seu pedido, por favor tente mais tarde.";
      break;
    default:
      title = "";
      message = "";
  }

  return (
    <>
      {alertDisplay ? (
        <Container sx={formAlert_display}>
          <Box sx={formAlert_wrapper}>
            <Alert
              severity={severity as "success" | "error" | "warning"}
              onClose={handleClose}
            >
              <AlertTitle>{title}</AlertTitle>
              {message}
            </Alert>
          </Box>
        </Container>
      ) : null}
    </>
  );
};
