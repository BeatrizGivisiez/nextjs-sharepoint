"use client";

import {
  Breadcrumbs,
  CardIconDescription,
  RichText,
  TitleDescription,
} from "@/components";
import { Box } from "@mui/material";
import { CARDICONDESCRIPTION, TITLE } from "../constants";
import { useEffect, useState } from "react";
import { RichTextProps } from "@/components/Typography/types";
import getRichText from "../services/getRichText";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import { PALETTE } from "@/app/theme/styles/constantes";

export const TemasMateriaisPage = () => {
  const [richText, setRichText] = useState<RichTextProps[]>([]);

  useEffect(() => {
    getRichText().then((response) => setRichText(response as []));
  }, []);

  return (
    <>
      <Breadcrumbs category="Sustentabilidade" mainPage="Temas Materiais" />

      <Box sx={{ mt: "80px", mb: "16px" }}>
        <TitleDescription title={"Temas Materiais"} />
        <RichText richText={richText.length > 0 ? richText[0].richText : ""} />
      </Box>

      <Box sx={{ ...cardicondescription, backgroundColor: PALETTE.GRAY_300 }}>
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
