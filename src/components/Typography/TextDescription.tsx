"use client";
import { PALETTE } from "@/app/theme/styles/constantes";
import { Box, Button, Typography } from "@mui/material";
import { ArrowSquareOut } from "@phosphor-icons/react";

import {
  textdescription,
  textdescription_button,
  textdescription_container,
  textdescription_subtitle,
  textdescription_title,
} from "./styles";
import { TextDescriptionProps } from "./types";

export const TextDescription = ({
  title,
  description,
  linkHref,
}: TextDescriptionProps) => {
  return (
    <Box sx={textdescription}>
      <Box sx={textdescription_container}>
        <Typography sx={textdescription_title}>{title}</Typography>
        <Typography sx={textdescription_subtitle}>{description}</Typography>
        {linkHref == undefined || "" ? null : (
          <Button
            sx={textdescription_button}
            variant="contained"
            href={linkHref}
            startIcon={
              <ArrowSquareOut
                weight="regular"
                size={22}
                color={PALETTE.BLACK}
              />
            }
          >
            Aceder ao link
          </Button>
        )}
      </Box>
    </Box>
  );
};
