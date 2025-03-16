"use client";

import {
  Breadcrumbs,
  CardIconDescription,
  TitleDescription,
} from "@/components";
import { Box } from "@mui/material";
import { IFile } from "@/components/Paper/types";
import { useEffect, useState } from "react";
import getDocumentLibrary from "../services/getDocumentLibrary";
import {
  paperanexodownload,
} from "./styles";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import { CARDICONDESCRIPTION, TITLEDESCRIPTION } from "../constants";
import { PALETTE } from "@/app/theme/styles/constantes";
import PaperAnexoDownload_Global from "@/components/Paper/PaperAnexoDownload_Global";

export const EspecificacoesTecnicasPage = () => {
  const [documentLibrary, setDocumentLibrary] = useState<IFile[]>([]);
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
  }, []);
  return (
    <>
      <Breadcrumbs
        category="Profissionais"
        mainPage="Especificações Técnicas de Equipamentos e Materiais de Redes"
      />

      <Box sx={paperanexodownload}>
        <TitleDescription
          title="Especificações Técnicas de Equipamentos e Materiais de Redes"
          description="Consulte a nossa biblioteca de documentos relativos a equipamentos e materiais de redes."
        />
        <PaperAnexoDownload_Global
          hasTabsPAD={hasTabsPAD}
          documentLibrary={documentLibrary}
        />
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
