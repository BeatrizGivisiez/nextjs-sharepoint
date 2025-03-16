"use client";

import { useEffect, useState } from "react";

import { PALETTE } from "@/app/theme/styles/constantes";
import { Breadcrumbs, DistributionView, TitleDescription } from "@/components";
import PaperAnexoDownload_Global from "@/components/Paper/PaperAnexoDownload_Global";
import { IFile } from "@/components/Paper/types";
import { DistributionProvider } from "@/contexts/DistributionContext";
import { Box } from "@mui/material";

import getDocumentLibrary from "../services/getDocumentLibrary";

export const IndicadoresDeQualidadeDaOndaDeTensaoPage = () => {
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
        category="Regulação"
        mainPage="Qualidade de serviço"
        URLmainPage="/regulacao/qualidade-de-servico"
        subPage="Indicadores de Qualidade da Onda de Tensão"
      />
      <Box sx={{ py: "80px" }}>
        <TitleDescription
          title={"Indicadores de Qualidade da Onda de Tensão"}
          description={
            "A qualidade da energia entregue aos consumidores está diretamente relacionada com a qualidade da onda de tensão da rede. A caracterização da qualidade da onda de tensão é realizada com base na análise de fenómenos contínuos e de eventos de tensão, de acordo com os planos de monitorização da qualidade de energia elétrica.\n\n" +
            "Os dados relativos a 2022 estão disponíveis para consulta no mapa abaixo."
          }
        />
        <Box sx={{ py: "80px" }}>
          <DistributionProvider>
            <DistributionView />
          </DistributionProvider>
        </Box>
      </Box>
      <Box sx={{ pt: "80px", backgroundColor: PALETTE.GRAY_300 }}>
        <TitleDescription
          title={"Documentação"}
          description={"Nesta secção pode consultar os dados históricos."}
        />

        <PaperAnexoDownload_Global
          hasTabsPAD={hasTabsPAD}
          documentLibrary={documentLibrary}
        />
      </Box>
    </>
  );
};
