"use client";

import { useEffect, useState, useRef } from "react";
import { PALETTE } from "@/app/theme/styles/constantes";
import { Box, Typography } from "@mui/material";
import { Mailbox } from "@phosphor-icons/react";
import { baseURL } from "@/util/baseURL";
import { useSearchParams } from "next/navigation";
import { Loading } from "@/components";
import {
  emailconfirmation_box,
  emailconfirmation_container,
  emailconfirmation_title,
  emailconfirmation_description,
} from "./styles";

export const ConfirmacaoEmailPage = () => {
  const searchParams = useSearchParams();


  const [confirmationStatus, setConfirmationStatus] = useState<
    "loading" | "success" | "failure"
  >("loading");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = searchParams.get("id");
    if (token) {
      verifyToken(token);
    }
  }, [searchParams]);

  const verifyToken = async (token: string) => {
    token = token.replace(/ /g, "+");
    const encodedToken = encodeURIComponent(token);
    const url = `${baseURL}/Form/EmailConfirmation?token=${encodedToken}`;
    try {
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

  return (
    <Box sx={emailconfirmation_box}>
      <Box sx={emailconfirmation_container}>
        <Mailbox size={64} weight="duotone" color={PALETTE.SECONDARY_MAIN} />
        <Typography sx={emailconfirmation_title}>
          {confirmationStatus == "success" ? (
            <>Pedido registado</>
          ) : (
            <>Pedido não registado </>
          )}
        </Typography>
        <Typography sx={emailconfirmation_description}>
          {confirmationStatus == "success" ? (
            <>
              O seu pedido foi encaminhado e será analisado com a maior
              brevidade possível.
            </>
          ) : (
            <>Pedimos desculpa, não foi possível processar o seu pedido.</>
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default ConfirmacaoEmailPage;
