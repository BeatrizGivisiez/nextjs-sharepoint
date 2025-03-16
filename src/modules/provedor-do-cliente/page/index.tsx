"use client";

import { useEffect, useState } from "react";

import { Breadcrumbs, RichText, TitleDescription } from "@/components";
import { RichTextProps } from "@/components/Typography/types";
import { Box } from "@mui/material";

import getRichText from "../services/getRichText";

export const ProvedorDoClientePage = () => {
  const [richText, setRichText] = useState<RichTextProps[]>([]);

  useEffect(() => {
    getRichText().then((response) => setRichText(response as []));
  }, []);

  return (
    <>
      <Breadcrumbs category={"Provedor do Cliente"} />
      <Box sx={{ my: 6 }}>
        <TitleDescription
          title="Provedor do Cliente"
          description="O Provedor do Cliente pretende promover a defesa dos direitos e das garantias legítimas dos clientes, compreender as suas necessidades e preocupações e dar provimento às suas queixas e reclamações.​​"
        />
        <RichText richText={richText.length > 0 ? richText[0].richText : ""} />
      </Box>
    </>
  );
};
