"use client";

import { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import {
  BannerTitle,
  Breadcrumbs,
  CardIconDescription,
  GalleryImageButton,
  TitleDescription,
} from "@/components";
import Banner from "@/../public/img/regulacao/qualidadedeservico-banner.jpg";
import { CARDICONDESCRIPTION } from "../constants";
import { GalleryImageButtonProps } from "@/components/Gallery/types";
import getGalleryImageButton from "../services/getGalleryImageButton";
import { galleryImageButton, galleryImageButton_wrapper } from "./styles";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import { PALETTE } from "@/app/theme/styles/constantes";

export const QualidadeDeServicoPage = () => {
  const [galleryImgButton, setGalleryImgButton] = useState<
    GalleryImageButtonProps[]
  >([]);

  useEffect(() => {
    getGalleryImageButton().then((response) =>
      setGalleryImgButton(response as [])
    );
  }, []);

  return (
    <>
      <BannerTitle src={Banner} title="Qualidade de Serviço" />
      <Breadcrumbs category="Regulação" mainPage="Qualidade de Serviço" />

      <Box sx={galleryImageButton}>
        <Container sx={galleryImageButton_wrapper}>
          {galleryImgButton.map((item, index) => (
            <GalleryImageButton
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          ))}
        </Container>
      </Box>

      <Box sx={{...cardicondescription, backgroundColor: PALETTE.GRAY_300,}}>
        <TitleDescription title="Explore outros temas" />
        <Box sx={cardicondescription_box}>
          {CARDICONDESCRIPTION.map((item, index) => (
            <CardIconDescription
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              href={item.href}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
