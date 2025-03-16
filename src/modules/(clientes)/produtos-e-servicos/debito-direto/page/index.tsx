"use client";

import {
  Breadcrumbs,
  CardIconDescription,
  RichText,
  TitleDescription,
} from "@/components";
import { Box } from "@mui/material";
import getRichText from "../services/getRichText";
import { useEffect, useState } from "react";
import { RichTextProps } from "@/components/Typography/types";
import { CARDICONDESCRIPTION, TITLEDESCRIPTION } from "../constants";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import { PALETTE } from "@/app/theme/styles/constantes";

export const DebitoDiretoPage = () => {
  const [richText, setRichText] = useState<RichTextProps[]>([]);

  useEffect(() => {
    getRichText().then((response) => setRichText(response as []));
  }, []);

  return (
    <>
      <Breadcrumbs
        category={"Clientes"}
        mainPage="Produtos e Serviços"
        URLmainPage="/clientes/produtos-e-servicos"
        subPage="Débito Direto"
      />
      <Box sx={{ pt: "80px" }}>
        <TitleDescription title={"Débito Direto"} description="" />
        <RichText richText={richText.length > 0 ? richText[0].richText : ""} />
      </Box>

      <Box sx={{ ...cardicondescription, backgroundColor: PALETTE.GRAY_300 }}>
        {TITLEDESCRIPTION.map((item, index) => (
          <TitleDescription key={index} title={item.title} />
        ))}
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
