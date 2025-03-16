"use client";

import {
  Breadcrumbs,
  ContainerAboutAction,
  RichText,
  TitleDescription,
} from "@/components";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import getRichText from "./services/getRichText";
import { RichTextProps } from "@/components/Typography/types";
import { CONTAINERABOUTACTION } from "./constants";
import { ArrowRight } from "@phosphor-icons/react";

export const DespachoDeEnergiaPage = () => {
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
        subPage="Despacho de Energia"
      />
      <Box sx={{ pt: "80px" }}>
        <TitleDescription title="Despacho de Energia" />
        <RichText richText={richText.length > 0 ? richText[0].richText : ""} />
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
