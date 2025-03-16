"use client";

import { Box, Container, useTheme } from "@mui/material";
import {
  Breadcrumbs,
  ButtonActionIcon,
  ContainerAboutAction,
  GalleryImageButton,
  RichText,
  TextDescription,
  TitleDescription,
} from "@/components";
import { CONTAINERABOUTACTION, objTitleDescription } from "../constants";
import { galleryImageButton, galleryImageButton_wrapper } from "./styles";
import { PALETTE } from "@/app/theme/styles/constantes";
import { ArrowRight } from "@phosphor-icons/react";
import { RichTextProps } from "@/components/Typography/types";
import { useEffect, useState } from "react";
import getRichText from "../services/getRichText";
import {
  GalleryImageButtonProps,
  GalleryLeafletsResponse,
} from "@/components/Gallery/types";
import getGalleryleaflets from "../services/getGalleryLeaflets";
import getGalleryImageButton from "../services/getGalleryImageButton";
import { GalleryLeaflets_Global } from "@/components/Gallery/GalleryLeaflets_Global";

const ReclamacoesPage = () => {
  const [richText, setRichText] = useState<RichTextProps[]>([]);
  const [leaflets, setLeaflets] = useState<GalleryLeafletsResponse[]>([]);
  const [galleryImgButton, setGalleryImgButton] = useState<
    GalleryImageButtonProps[]
  >([]);
  const [hasTabs, setHasTabs] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getRichText().then((response) => setRichText(response as []));
    const fetchLeaflets = async () => {
      try {
        const response = await getGalleryleaflets();
        const leafletsResponse =
          response as unknown as GalleryLeafletsResponse[];
        setLeaflets(leafletsResponse);
        if (
          leafletsResponse.length > 0 &&
          leafletsResponse[0]?.tabsLabel != null
        ) {
          setHasTabs(true);
        } else {
          setHasTabs(false);
        }
      } catch (error) {
        console.error("Error fetching leaflets:", error);
        setLeaflets([]);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaflets();
    getGalleryImageButton().then((response) =>
      setGalleryImgButton(response as [])
    );
  }, []);

  return (
    <>
      <Breadcrumbs category="Clientes" mainPage={"Reclamações"} />

      <Box sx={{ pt: "80px", pb: "50px" }}>
        {objTitleDescription.map((item, index) => (
          <>
          <TitleDescription
            key={index}
            title={item.title}
            description={""}
          />
          <RichText richText={richText.length > 0 ? richText[0].richText : ""} />
          </>
        ))}
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
              buttonTxt={"Formulário"}
            />
          ))}
        </Container>
      </Box>

      <TextDescription
        title={""}
        description={
          "* Informa-se previamente se as luminárias apagadas estão ao abrigo do programa de poupança energética, da responsabilidade do Governo Regional e Câmaras Municipais (entidades responsáveis pelos pontos de luz a desligar)."
        }
      />

      <Box sx={{ pt: "50px", pb: "50px", backgroundColor: PALETTE.GRAY_300 }}>
        <TitleDescription title="Consulte os nossos folhetos" description="" />

        <GalleryLeaflets_Global
          leaflets={leaflets}
          hasTabs={hasTabs}
          loading={loading}
        />
      </Box>

      <Box sx={{ mt: 10 }}>
        <TitleDescription title={"Livro de Reclamações On-line"} />
        <RichText richText={richText.length > 0 ? richText[1].richText : ""}>
          <ButtonActionIcon
            label={"Aceder á plataforma"}
            iconEnd={ArrowRight}
            href="https://www.livroreclamacoes.pt/Inicio/"
          />
        </RichText>
        <RichText richText={richText.length > 0 ? richText[2].richText : ""} />
      </Box>

      {CONTAINERABOUTACTION.map((item, index) => (
        <ContainerAboutAction
          key={index}
          title={item.title}
          button={item.button}
          icon={ArrowRight}
          isBackground={true}
          buttonHref={item.buttonHref}
          mailto={item.mailto}
          contacto={item.contacto}
        />
      ))}
    </>
  );
};
export default ReclamacoesPage;
