"use client";

import { PALETTE } from "@/app/theme/styles/constantes";
import {
  Breadcrumbs,
  TitleDescription,
  RichText,
} from "@/components";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { IFile } from "@/components/Paper/types";
import getDocumentLibrary from "../services/getDocumentLibrary";
import { RichTextProps } from "@/components/Typography/types";
import getRichText from "../services/getRichText";
import { PAGE_DISTRIBUICAO_DE_ENERGIA, TITLEDESCRIPTION } from "../constants";
import PaperAnexoDownload_Global from "@/components/Paper/PaperAnexoDownload_Global";

export const DistribuicaoDeEnergiaPage = () => {
  const [documentLibrary, setDocumentLibrary] = useState<IFile[]>([]);
  const [richText, setRichText] = useState<RichTextProps[]>([]);
  const [hasTabsPAD, setHasTabsPAD] = useState<boolean>(false);

  useEffect(() => {
    getDocumentLibrary().then((response) => {
      const documentLibraryResponse = response as IFile[];
      setDocumentLibrary(documentLibraryResponse);
      if (documentLibraryResponse[0].tabsLabel != "") {
        setHasTabsPAD(true);
      } else {
        setHasTabsPAD(false);
      }
    });
    getRichText().then((response) => setRichText(response as []));
  }, []);

  return (
    <>
      <Breadcrumbs
        category={"EDA"}
        mainPage={"O que fazemos"}
        URLmainPage="/eda/o-que-fazemos"
        subPage={"Distribuição de Energia"}
      />

      <Box sx={{ pt: "80px" }}>
        <TitleDescription title={PAGE_DISTRIBUICAO_DE_ENERGIA.title} />
        <RichText richText={richText.length > 0 ? richText[0].richText : ""} />
      </Box>

      <Box sx={{ py: "60px", backgroundColor: PALETTE.GRAY_300 }}>
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
    </>
  );
};
