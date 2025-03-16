"use client";
import {
  Breadcrumbs,
  CardIconDescription,
  RichText,
  TitleDescription,
} from "@/components";
import { Box } from "@mui/material";
import { PALETTE } from "@/app/theme/styles/constantes";
import { useEffect, useState } from "react";
import { RichTextProps } from "@/components/Typography/types";
import getRichText from "../services/getRichText";
import { IFile } from "@/components/Paper/types";
import getDocumentLibrary from "../services/getDocumentLibrary";
import { CARDICONDESCRIPTION } from "../constants";
import { cardicondescription, cardicondescription_box } from "@/styles/CardIconDescription";
import PaperAnexoDownload_Global from "@/components/Paper/PaperAnexoDownload_Global";

export const TermoacumuladoresPage = () => {
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
      <Breadcrumbs
        category={"Clientes"}
        mainPage="Produtos e Serviços"
        URLmainPage="/clientes/produtos-e-servicos"
        subPage="Termoacumuladores"
      />

      <Box sx={{ pt: "80px" }}>
        <TitleDescription title={"Termoacumuladores"} description="" />
      </Box>

      <RichText richText={richText.length > 0 ? richText[0].richText : ""} />

      <Box sx={{ backgroundColor: PALETTE.GRAY_300, py: "80px" }}>
        <TitleDescription title="Documentação" description="" />
        <PaperAnexoDownload_Global
          hasTabsPAD={hasTabsPAD}
          documentLibrary={documentLibrary}
        />
      </Box>

      <Box sx={cardicondescription}>
        <TitleDescription title="Explore outros temas" />
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
