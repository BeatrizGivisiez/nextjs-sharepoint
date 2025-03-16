"use client";

import { PALETTE } from "@/app/theme/styles/constantes";
import {
  BannerTitle,
  Breadcrumbs,
  CardIconDescription,
  RichText,
  TitleDescription,
} from "@/components";
import { Box } from "@mui/material";
import Banner from "@/../public/img/investidores/assembleiasgerais-banner.jpg";
import { RichTextProps } from "@/components/Typography/types";
import { useEffect, useState } from "react";
import getRichText from "../services/getRichText";
import getDocumentLibrary from "../services/getDocumentLibrary";
import { IFile } from "@/components/Paper/types";
import { CARDICONDESCRIPTION, TITLEDESCRIPTION } from "../constants";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import PaperAnexoDownload_Global from "@/components/Paper/PaperAnexoDownload_Global";

export const AssembleiasGeraisPage = () => {
  const [richText, setRichText] = useState<RichTextProps[]>([]);
  const [documentLibrary, setDocumentLibrary] = useState<IFile[]>([]);
  const [hasTabsPAD, setHasTabsPAD] = useState<boolean>(false);

  useEffect(() => {
    getRichText().then((response) => setRichText(response as []));
    getDocumentLibrary().then((response) => {
      const documentLibraryResponse = response as IFile[];
      setDocumentLibrary(documentLibraryResponse);
      if (documentLibraryResponse[0].tabsLabel != "") {
        setHasTabsPAD(true);
      } else {
        setHasTabsPAD(false);
      }
    });
  }, []);

  return (
    <>
      <BannerTitle src={Banner} title="Assembleias Gerais" />
      <Breadcrumbs category="Investidores" mainPage="Assembleias Gerais" />

      <Box sx={{ py: "80px" }}>
        <TitleDescription
          title={"Requisitos de participação na Assembleia Geral Anual"}
        />
        <RichText richText={richText.length > 0 ? richText[0].richText : ""} />
      </Box>

      <Box sx={{ pt: "80px", pb: "32px", backgroundColor: PALETTE.GRAY_300 }}>
        <TitleDescription
          title="Documentação relativa às Assembleias Gerais"
          description="De acordo com o n.º 3 do art. 12.º do Contrato Social “Os elementos relativos ao direito mínimo à informação e às informações preparatórias da Assembleia Geral não poderão ser divulgados nem estar disponíveis no sítio da Sociedade, na internet.” Esses elementos são disponibilizados na sede da sociedade de acordo com o previsto no art. 288.º e art. 289.º do Código das sociedades comerciais."
        />
        <PaperAnexoDownload_Global
          hasTabsPAD={hasTabsPAD}
          documentLibrary={documentLibrary}
        />
      </Box>

      <Box sx={cardicondescription}>
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
