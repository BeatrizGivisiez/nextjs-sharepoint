"use client";

import { Box, Container } from "@mui/material";
import {
  BannerTitle,
  Breadcrumbs,
  ContainerAboutAction,
  PowerBI,
  RichText,
  TitleDescription,
} from "@/components";
import Banner from "@/../public/img/comunicacao/producaoeconsumo-banner.jpg";
import { Download } from "@phosphor-icons/react";
import { PowerBIProps } from "@/components/PowerBI/types";
import getPowerBI from "../services/getPowerBI";
import { useEffect, useState } from "react";
import {
  CONTAINERABOUTACTION,
  CONTAINERABOUTACTION_TEXT,
  TITLEDESCRIPTION,
} from "../constants";
import { PALETTE } from "@/app/theme/styles/constantes";
import { RichTextProps } from "@/components/Typography/types";
import getRichText from "../services/getRichText";
import { IFile } from "@/components/Paper/types";
import getDocumentLibrary from "../services/getDocumentLibrary";
import PaperAnexoDownload_Global from "@/components/Paper/PaperAnexoDownload_Global";

export const ProducaoEConsumoPage = () => {
  const [powerbi, setPowerbi] = useState<PowerBIProps[]>([]);
  const [richText, setRichText] = useState<RichTextProps[]>([]);
  const [documentLibrary, setDocumentLibrary] = useState<IFile[]>([]);
  const [hasTabsPAD, setHasTabsPAD] = useState<boolean>(false);

  useEffect(() => {
    getPowerBI().then((response) => {
      setPowerbi(response as PowerBIProps[]);
    });
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
      <BannerTitle src={Banner} title="Produção e Consumo" />
      <Breadcrumbs category="Comunicação" mainPage="Produção e Consumo" />

      <Box sx={{ py: "80px" }}>
        <RichText richText={richText.length > 0 ? richText[0].richText : ""} />
      </Box>

      <Box sx={{ py: 2, backgroundColor: PALETTE.GRAY_300 }}>
        {powerbi.map((item, index) => (
          <PowerBI key={index} src={item.src} />
        ))}
      </Box>

      <Box sx={{ py: "80px" }}>
        {TITLEDESCRIPTION.map((item, index) => (
          <TitleDescription
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}

        <PaperAnexoDownload_Global
          hasTabsPAD={hasTabsPAD}
          documentLibrary={documentLibrary}
        />
      </Box>

      {CONTAINERABOUTACTION.map((item, index) => (
        <ContainerAboutAction
          key={index}
          title={item.title}
          button={item.button}
          icon={Download}
          isBackground={true}
          isDefault={false}
          downloadUrl={item.downloadUrl}
        >
          {CONTAINERABOUTACTION_TEXT}
        </ContainerAboutAction>
      ))}
    </>
  );
};
