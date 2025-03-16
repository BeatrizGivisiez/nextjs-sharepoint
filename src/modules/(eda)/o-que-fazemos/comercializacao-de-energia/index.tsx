"use client";

import {
  Breadcrumbs,
  ContainerAboutAction,
  RichText,
  TextParagraph,
  TitleDescription,
} from "@/components";
import { Paragraph } from "@/components/Typography/TextParagraph";
import { Box, Typography } from "@mui/material";
import { ArrowRight } from "@phosphor-icons/react";
import { CONTAINERABOUTACTION, CONTAINERABOUTACTION_TEXT } from "../constants";
import { useEffect, useState } from "react";
import { RichTextProps } from "@/components/Typography/types";
import getRichText from "./services/getRichText";

export const ComercializacaoDeEnergiaPage = () => {
  const [richText, setRichText] = useState<RichTextProps[]>([]);

  useEffect(() => {
    getRichText().then((response) => setRichText(response as []));
  }, []);
  return (
    <>
      <Breadcrumbs
        category="EDA"
        mainPage="O que fazemos"
        URLmainPage="/eda/o-que-fazemos"
        subPage="Comercialização de Energia"
      />
      <Box sx={{ pt: "80px" }}>
        <TitleDescription title="Comercialização de Energia" />
        <RichText richText={richText.length > 0 ? richText[0].richText : ""} />
      </Box>

      <Box>
        {CONTAINERABOUTACTION.map((item, index) => (
          <ContainerAboutAction
            key={index}
            title={item.title}
            button={item.button}
            icon={ArrowRight}
            isBackground={true}
            isDefault={false}
            buttonHref={item.buttonHref}
          >
            {CONTAINERABOUTACTION_TEXT}
          </ContainerAboutAction>
        ))}
      </Box>
    </>
  );
};
