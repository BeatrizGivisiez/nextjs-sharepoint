"use client";

import { RichText, TitleDescription, Breadcrumbs } from "@/components";
import { RichTextProps } from "@/components/Typography/types";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import getRichText from "../services/getRichText";

export const PoliticaDeCookiesPage = () => {
  const [richText, setRichText] = useState<RichTextProps[]>([]);

  useEffect(() => {
    getRichText().then((response) => setRichText(response as []));
  }, []);

  return (
    <>
      <Breadcrumbs category="Política de Cookies" />

      <Box sx={{ my: 6 }}>
        <TitleDescription title="Política de Cookies" />
      </Box>
      <Box>
        <RichText richText={richText.length > 0 ? richText[0].richText : ""} />
      </Box>
    </>
  );
};
