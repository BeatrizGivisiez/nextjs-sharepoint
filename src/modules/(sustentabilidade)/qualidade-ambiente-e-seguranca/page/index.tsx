"use client";

import {
  Breadcrumbs,
  CardIconDescription,
  ContainerAboutAction,
  GalleryImageButton,
  RichText,
  TitleDescription,
} from "@/components";
import { Box, Container } from "@mui/material";
import { Download } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { RichTextProps } from "@/components/Typography/types";
import getRichText from "../services/getRichText";
import { CARDICONDESCRIPTION, CONTAINERABOUTACTION, TITLE } from "../constants";
import { GalleryImageButtonProps } from "@/components/Gallery/types";
import getGalleryImageButton from "../services/getGalleryImageButton";
import { galleryImageButton, galleryImageButton_wrapper } from "./styles";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import { PALETTE } from "@/app/theme/styles/constantes";

export const QualidadeAmbienteESegurancaPage = () => {
  const [richText, setRichText] = useState<RichTextProps[]>([]);
  const [galleryImgButton, setGalleryImgButton] = useState<
    GalleryImageButtonProps[]
  >([]);

  useEffect(() => {
    getRichText().then((response) => setRichText(response as []));
    getGalleryImageButton().then((response) =>
      setGalleryImgButton(response as [])
    );
  }, []);

  return (
    <>
      <Breadcrumbs
        category="Sustentabilidade"
        mainPage="Qualidade, Ambiente e Segurança"
      />

      <Box sx={{ py: "80px" }}>
        <TitleDescription title="Qualidade, Ambiente e Segurança" />
        <RichText richText={richText.length > 0 ? richText[0].richText : ""} />
      </Box>

      {CONTAINERABOUTACTION.map((item, index) => (
        <ContainerAboutAction
          key={index}
          title={item.title}
          button={item.button}
          icon={Download}
          isBackground={true}
          isDefault={false}
          downloadUrl={item.downloadUrl}
        />
      ))}

      <Box sx={{ py: "80px" }}>
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
      </Box>

      <Box sx={{...cardicondescription, backgroundColor: PALETTE.GRAY_300,}}>
        <TitleDescription title={TITLE} />
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
