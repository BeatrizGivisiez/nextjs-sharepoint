"use client";

import { PALETTE } from "@/app/theme/styles/constantes";
import { Box, Button, Link, Typography } from "@mui/material";

import {
  cardicondescription_card,
  cardicondescription_card_title,
} from "./styles";
import { CardIconDescriptionProps } from "./types";

export const CardIconDescription = ({
  icon: Icon,
  title,
  href,
}: CardIconDescriptionProps) => {
  return (
    <Link href={href} sx={{ textDecoration: "none" }}>
      <Button sx={cardicondescription_card}>
        <Box sx={{ height: "48px" }}>
          {Icon && (
            <Icon size={48} color={PALETTE.SECONDARY_MAIN} weight="duotone" />
          )}
        </Box>
        <Typography sx={cardicondescription_card_title}>{title}</Typography>
      </Button>
    </Link>
  );
};
