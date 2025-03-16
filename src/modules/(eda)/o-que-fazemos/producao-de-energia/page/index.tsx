"use client";

import {
  Breadcrumbs,
  RichText,
  ProductionView,
  TitleDescription,
} from "@/components";
import { RichTextProps } from "@/components/Typography/types";
import { ProductionProvider } from "@/contexts/ProductionContext";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import getRichText from "../services/getRichText";

export const ProducaoDeEnergiaPage = () => {
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
        subPage="Produção de Energia"
      />
      <Box sx={{ pt: "80px" }}>
        <TitleDescription title="Produção de Energia" />
        <RichText richText={richText.length > 0 ? richText[0].richText : ""} />
      </Box>

      <Box sx={{ pb: "80px" }}>
        <ProductionProvider>
          <ProductionView />
        </ProductionProvider>
      </Box>
    </>
  );
};
