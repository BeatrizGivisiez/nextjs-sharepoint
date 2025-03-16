"use client";

import Image from "next/image";

import SemImg from "@/../public/img/sem-img.png";
import { PALETTE } from "@/app/theme/styles/constantes";
import { Box, Typography } from "@mui/material";

import {
  galleryleaflets_bgimage,
  galleryleaflets_image_box,
  galleryleaflets_image_description,
  galleryleaflets_image_title,
} from "./styles";
import { GalleryLeafletsProps } from "./types";

export const GalleryLeaflets = ({
  photo,
  title,
  description,
  file,
  isBackground,
}: GalleryLeafletsProps) => {
  const openPDF = () => {
    if (file) {
      window.open(file, "_blank");
    } else {
      console.error("PDF file URL is not provided.");
    }
  };

  return (
    <Box
      sx={galleryleaflets_image_box}
      onClick={openPDF}
      style={{ cursor: file ? "pointer" : "default" }}
    >
      <Box
        sx={{
          ...galleryleaflets_bgimage,
          backgroundColor: isBackground ? PALETTE.GRAY_300 : PALETTE.WHITE,
        }}
      >
        {photo == null ? (
          <Image src={SemImg} alt={title} />
        ) : (
          <img src={photo ?? ""} alt={title} />
        )}
      </Box>
      <Typography sx={galleryleaflets_image_title}>
        {title.length > 19 ? `${title.slice(0, 19)}...` : title}
      </Typography>
      <Typography sx={galleryleaflets_image_description}>
        {description?.length > 40
          ? `${description.slice(0, 40)}...`
          : description}
      </Typography>
    </Box>
  );
};

export default GalleryLeaflets;
