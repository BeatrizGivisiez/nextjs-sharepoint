import {
  Breadcrumbs,
  GalleryImageButton,
  RichText,
  TitleDescription,
} from "@/components";
import { Box, Container, Typography } from "@mui/material";

import getGalleryImageButton from "../services/getGalleryImageButton";
import getRichText from "../services/getRichText";
import {
  galleryImageButton,
  galleryImageButton_wrapper,
  grupoeda,
  grupoeda_box,
  grupoeda_description,
  grupoeda_title,
} from "./styles";
import { GRUPOEDA } from "../constants";

export default async function GrupoEDAPage() {
  const richText = await getRichText();
  const galleryImgButton = await getGalleryImageButton();

  return (
    <>
      <Breadcrumbs category="Grupo EDA" />

      <Box sx={{ py: "80px" }}>
        <TitleDescription title={"As empresas do Grupo EDA"} />
        <RichText richText={richText.length > 0 ? richText[0].richText : ""} />
      </Box>

      <Box sx={galleryImageButton}>
        <Container sx={galleryImageButton_wrapper}>
          {galleryImgButton.map((item, index) => (
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

      <Box sx={grupoeda}>
        {GRUPOEDA.map((item, index) => (
          <Box key={index} sx={grupoeda_box}>
            <Typography sx={grupoeda_title}>{item.title}</Typography>
            <Typography sx={grupoeda_description}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}
