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
import Banner from "@/../public/img/comunicacao/projetos-banner.jpg";
import { PALETTE } from "@/app/theme/styles/constantes";
import { GalleryImageButtonProps } from "@/components/Gallery/types";
import getGalleryImageButton from "../services/getGalleryImageButton";
import { CARDICONDESCRIPTION } from "../constants";
import { galleryImageButton, galleryImageButton_wrapper } from "./styles";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";

export const ProjetosPage = () => {
  const [galleryImgButton, setGalleryImgButton] = useState<
    GalleryImageButtonProps[]
  >([]);

  useEffect(() => {
    getGalleryImageButton().then((response) =>
      setGalleryImgButton(response as [])
    );
  }, []);

  // Filtrando os itens com order igual a 1
  const galleryImgButtonOrder1 = galleryImgButton.filter(
    (item) => item.order === 1
  );

  // Filtrando os itens com order igual a 2
  const galleryImgButtonOrder2 = galleryImgButton.filter(
    (item) => item.order === 2
  );

  return (
    <>
      <BannerTitle src={Banner} title="Projetos" />
      <Breadcrumbs category={"Comunicação"} mainPage="Projetos" />

      <Box sx={galleryImageButton}>
        <TitleDescription
          title={"Plano de Recuperação e Resiliência"}
          description={""}
        />
        <Container sx={galleryImageButton_wrapper}>
          {galleryImgButtonOrder1.map((item, index) => (
            <GalleryImageButton
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
              contain={true}
            />
          ))}
        </Container>
      </Box>

      <Box sx={{ ...galleryImageButton, backgroundColor: PALETTE.GRAY_300 }}>
        <TitleDescription
          title={"Açores 2020"}
          description={
            ""
          }
        />
        <Container sx={galleryImageButton_wrapper}>
          {galleryImgButtonOrder2.map((item, index) => (
            <GalleryImageButton
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
              contain={true}
            />
          ))}
        </Container>
      </Box>

      <Box sx={cardicondescription}>
        <TitleDescription title={"Explore outros temas"} />
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
