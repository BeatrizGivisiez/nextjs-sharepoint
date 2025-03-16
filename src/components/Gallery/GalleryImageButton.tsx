"use client";

import { PALETTE } from "@/app/theme/styles/constantes";
import { Box, Button } from "@mui/material";
import { ArrowRight } from "@phosphor-icons/react";

import {
  galleryImageButton_button,
  galleryImageButton_card,
  galleryImageButton_containedCard,
  galleryImageButton_description,
  galleryImageButton_stacker,
  galleryImageButton_title,
} from "./styles";
import { GalleryImageButtonProps } from "./types";

export const GalleryImageButton = ({
  id,
  title,
  description,
  image,
  link,
  contain,
  buttonTxt,
}: GalleryImageButtonProps) => {
  return (
    <Box
      sx={contain ? galleryImageButton_containedCard : galleryImageButton_card}
    >
      <Box sx={{ ...galleryImageButton_stacker }}>
        <img src={image ?? ""} alt={title} />
        <Box sx={galleryImageButton_title}>{title}</Box>
        <Box sx={galleryImageButton_description}>{description}</Box>
      </Box>
      {link == undefined ? null : (
        <Button
          sx={galleryImageButton_button}
          href={link}
          endIcon={
            <ArrowRight size={20} color={PALETTE.BLACK} weight="regular" />
          }
        >
          {buttonTxt != null ? buttonTxt : "Saber mais"}
        </Button>
      )}
    </Box>
  );
};
