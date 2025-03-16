"use client";

import { useEffect, useState } from "react";

import { PALETTE } from "@/app/theme/styles/constantes";
import { Breadcrumbs, RichText, TitleDescription } from "@/components";
import PaperAnexoDownload_Global from "@/components/Paper/PaperAnexoDownload_Global";
import { IFile } from "@/components/Paper/types";
import { RichTextProps } from "@/components/Typography/types";
import { Box } from "@mui/material";

import { DESCRIPTION, TITLE } from "../contants";
import getDocumentLibrary from "../services/getDocumentLibrary";
import getRichText from "../services/getRichText";

export const PrevencaoDaCorrupcaoPage = () => {
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
      <Breadcrumbs category={"Prevenção da Corrupção"} />

      <Box sx={{ pt: "80px" }}>
        <TitleDescription title={TITLE} description={DESCRIPTION} />
        <PaperAnexoDownload_Global
          hasTabsPAD={hasTabsPAD}
          documentLibrary={documentLibrary}
        />
      </Box>

      <Box sx={{ py: "80px", backgroundColor: PALETTE.GRAY_300 }}>
        <TitleDescription
          title={"Denúncia de Irregularidade"}
          description={
            "Através dos canais de participação de irregularidades disponibilizados, colaboradores, clientes, parceiros, fornecedores e restantes stakeholders poderão, de forma independente e anónima, comunicar qualquer situação ou suspeita fundamentada relacionada com a prática de irregularidades."
          }
        />
        <RichText richText={richText.length > 0 ? richText[0].richText : ""} />
      </Box>
    </>
  );
};
