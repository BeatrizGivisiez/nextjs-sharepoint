"use client";

import { useEffect, useState } from "react";
import {
  Breadcrumbs,
  CardIconDescription,
  TitleDescription,
} from "@/components";
import { Box } from "@mui/material";
import { IFile } from "@/components/Paper/types";
import getDocumentLibrary from "../services/getDocumentLibrary";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import { CARDICONDESCRIPTION } from "../constants";
import { PALETTE } from "@/app/theme/styles/constantes";
import PaperAnexoDownload_Global from "@/components/Paper/PaperAnexoDownload_Global";

export const ContasReguladasPage = () => {
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
      <Breadcrumbs category="Regulação" mainPage="Contas Reguladas" />
      <Box sx={{ my: 6 }}>
        <TitleDescription
          title="Contas Reguladas"
          description="Em cumprimento ao estipulado no artigo 17.º do Regulamento Tarifário em vigor, pode consultar o relatório sumário das contas reguladas, que inclui o relatório da garantia razoável de fiabilidade sobre as contas reguladas do setor elétrico efetuado por auditores externos, assim como as normas complementares de relato financeiro e operacional definidas e publicadas pela ERSE.​​"
        />
      </Box>

      <PaperAnexoDownload_Global
        hasTabsPAD={hasTabsPAD}
        documentLibrary={documentLibrary}
      />

      <Box sx={{ ...cardicondescription, backgroundColor: PALETTE.GRAY_300 }}>
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
