"use client";

import {
  emailconfirmation_box,
  emailconfirmation_container,
  emailconfirmation_description,
  emailconfirmation_title,
  button,
} from "@/modules/confirmacao-email/styles";
import { Box, Button, Typography } from "@mui/material";
import { Plugs, House } from "@phosphor-icons/react";
import { PALETTE } from "./theme/styles/constantes";

export default function NotFound() {
  return (
    <Box sx={emailconfirmation_box}>
      <Box sx={emailconfirmation_container}>
        <Plugs size={100} weight="duotone" color={PALETTE.SECONDARY_MAIN} />
        <Typography sx={emailconfirmation_title}>Oops! Not Found</Typography>
        <Typography sx={emailconfirmation_description}>
          Página não encontrada
        </Typography>
        <Button
          startIcon={<House size={24} color={PALETTE.BLACK} weight="regular" />}
          sx={button}
          variant="contained"
          href="/"
        >
          Voltar ao início
        </Button>
      </Box>
    </Box>
  );
}