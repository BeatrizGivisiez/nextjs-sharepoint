"use client";

import { Breadcrumbs, RichText, TitleDescription } from "@/components";
import Image from "next/image";
import LogoProjetos from "@/../public/img/comunicacao/logo-projetos.png";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { RichTextProps } from "@/components/Typography/types";
import getRichText from "../services/getRichText";
import { box, container } from "./styles";

export const EDAElectricidadeDosAcoresPage = () => {
  const [richText, setRichText] = useState<RichTextProps[]>([]);

  useEffect(() => {
    getRichText().then((response) => setRichText(response as []));
  }, []);
  return (
    <>
      <Breadcrumbs
        category={"Comunicação"}
        mainPage="Projetos"
        URLmainPage="/comunicacao/projetos"
        subPage="PRR - Plano de Recuperação e Resiliência"
      />

      <Box sx={box}>
        <Box sx={container}>
          <Image
            src={LogoProjetos}
            alt="Logo Projetos"
            width={900}
            layout="responsive"
          />
          <Box sx={{ mt: 4 }}>
            <TitleDescription
              title="PRR - Plano de Recuperação e Resiliencia"
              description={
                "Investimento: C14-i03-RAA - Transição Energética nos Açores \nBeneficiário Final: EDA Renováveis, S. A. \nFinanciamento PRR: 74.500.000,00€"
              }
            />
            <RichText
              richText={richText.length > 0 ? richText[0].richText : ""}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
