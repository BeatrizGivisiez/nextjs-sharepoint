"use client";

import { Breadcrumbs, RichText, TitleDescription } from "@/components";
import { RichTextProps } from "@/components/Typography/types";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import getRichText from "../services/getRichText";

export const PoliticaDePrivacidadePage = () => {
  const [richText, setRichText] = useState<RichTextProps[]>([]);

  useEffect(() => {
    getRichText().then((response) => setRichText(response as []));
  }, []);

  return (
    <>
      <Breadcrumbs
        category="Home"
        mainPage="Política de Privacidade de Dados Pessoais"
      />

      <Box sx={{ py: "80px" }}>
        <TitleDescription title="Política de Privacidade de Dados Pessoais" />
        <RichText richText={richText.length > 0 ? richText[0].richText : ""} />
      </Box>
    </>
  );
};
