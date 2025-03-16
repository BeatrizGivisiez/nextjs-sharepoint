"use client";

import { Box } from "@mui/material";
import {
  Breadcrumbs,
  CardIconDescription,
  RichText,
  TitleDescription,
} from "@/components";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import getRichText from "../services/getRichText";
import { useEffect, useState } from "react";
import { RichTextProps } from "@/components/Typography/types";
import { CARDICONDESCRIPTION, TITLE } from "../constants";
import { PALETTE } from "@/app/theme/styles/constantes";

export const ModeloDeGovernancePage = () => {
  const [richText, setRichText] = useState<RichTextProps[]>([]);

  useEffect(() => {
    getRichText().then((response) => setRichText(response as []));
  }, []);
  return (
    <>
      <Breadcrumbs
        category="Sustentabilidade"
        mainPage="Modelo de Governance"
      />

      <Box sx={{ mt: "80px", mb: "16px" }}>
        <TitleDescription title={"Modelo de Governance"} />
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
