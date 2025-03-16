"use client";

import { PALETTE } from "@/app/theme/styles/constantes";
import { Box, Button, Typography } from "@mui/material";
import { Check, Mailbox } from "@phosphor-icons/react";

import {
  button,
  emailconfirmation_box,
  emailconfirmation_container,
  emailconfirmation_description,
  emailconfirmation_title,
} from "./styles";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { baseURL } from "@/util/baseURL";
import { Loading } from "@/components";

export const CancelarEmailPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("id");

  const [confirmationStatus, setConfirmationStatus] = useState<
  "loading" | "success" | "failure"
>("loading");
const [loading, setLoading] = useState(false);

  const verifyToken = async (token: string) => {
    token = token.replace(/ /g, "+");
    try {
      const encodedToken = encodeURIComponent(token);
      const url = `${baseURL}/Form/Unsubscribe?cancelationToken=${encodedToken}`;
      console.log("Request URL: " + url)
      const response = await fetch(url, {
        method: "POST",
        body: encodedToken,
        headers: {
          "Content-Type": "text/plain",
        },
      });
      if (response.ok) {
        setConfirmationStatus("success");
      } else {
        const errorText = await response.text();
        setConfirmationStatus("failure");
      }
    } catch (error) {
      setConfirmationStatus("failure");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  const handleButtonClick = () => {
    setLoading(true);
    console.log('Button clicked');
    if (token) {
      verifyToken(token);
    }
  };

  return (
    <Box sx={emailconfirmation_box}>
      <Box sx={emailconfirmation_container}>
        <Mailbox size={100} weight="duotone" color={PALETTE.SECONDARY_MAIN} />
        <Typography sx={emailconfirmation_title}>
          Cancelar alertas de interrupção de energia
        </Typography>
        <Typography sx={emailconfirmation_description}>
          Se deseja cancelar a sua inscrição e parar de receber os nossos
          e-mails de alertas, clique no botão abaixo.
        </Typography>
        <Button
          endIcon={<Check size={24} color={PALETTE.BLACK} weight="regular" />}
          sx={button}
          variant="contained"
          onClick={handleButtonClick}
        >
          Confirmar
        </Button>
      </Box>
    </Box>
  );
};
