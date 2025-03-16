"use client";

import {
  Breadcrumbs,
  CardIconDescription,
  RichText,
  TitleDescription,
} from "@/components";
import { Box } from "@mui/material";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import { RichTextProps } from "@/components/Typography/types";
import { useEffect, useState } from "react";
import getRichText from "../services/getRichText";
import { CARDICONDESCRIPTION, TITLE } from "../constants";
import { PALETTE } from "@/app/theme/styles/constantes";

export const FinanciamentoSustentavelPage = () => {
  const [richText, setRichText] = useState<RichTextProps[]>([]);

  useEffect(() => {
    getRichText().then((response) => setRichText(response as []));
  }, []);

  return (
    <>
      <Breadcrumbs
        category="Sustentabilidade"
        mainPage="Financiamento Sustentável"
      />

      <Box sx={{ mt: 10, mb: 5 }}>
        <TitleDescription title="Financiamento Sustentável" />
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
