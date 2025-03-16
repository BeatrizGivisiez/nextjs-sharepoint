"use client";

import { PALETTE } from "@/app/theme/styles/constantes";
import { Box, Button } from "@mui/material";
import { ArrowRight } from "@phosphor-icons/react";

import {
  banner,
  banner_button,
  banner_description,
  banner_stacker,
  banner_title,
  banner_wrapper,
} from "./styles";
import { BannerProps } from "./types";

export const Banner = ({ title, description, link, imageSrc }: BannerProps) => {
  return (
    <Box sx={banner}>
      <Box sx={banner_wrapper}>
        <img src={imageSrc ?? ""} alt="Image Banner" />

        <Box sx={banner_stacker}>
          <Box sx={banner_title}>{title}</Box>
          <Box sx={banner_description}>
            {description.length > 145
              ? `${description.slice(0, 145)}...`
              : description}
          </Box>
          {link && (
            <Button
              sx={banner_button}
              variant="contained"
              href={link}
              endIcon={
                <ArrowRight size={20} color={PALETTE.BLACK} weight="regular" />
              }
            >
              Saber mais
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};
