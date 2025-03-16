"use client";

import { Breadcrumbs, TitleDescription } from "@/components";
import { Box } from "@mui/material";
import { PALETTE } from "@/app/theme/styles/constantes";
import { PowerBI } from "@/components/PowerBI/PowerBI";
import { DESCRIPTION, TITLE } from "../constants";
import { useEffect, useState } from "react";
import { PowerBIProps } from "@/components/PowerBI/types";
import getPowerBI from "../services/getPowerBI";
import { IFile } from "@/components/Paper/types";
import getDocumentLibrary from "../services/getDocumentLibrary";
import PaperAnexoDownload_Global from "@/components/Paper/PaperAnexoDownload_Global";

export const IndicadoresDeContinuidadeDeServicoPage = () => {
  const [powerbi, setPowerbi] = useState<PowerBIProps[]>([]);
  const [documentLibrary, setDocumentLibrary] = useState<IFile[]>([]);
  const [hasTabsPAD, setHasTabsPAD] = useState<boolean>(false);

  useEffect(() => {
    getPowerBI().then((response) => {
      setPowerbi(response as PowerBIProps[]);
    });
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
        subPage="Indicadores de Continuidade de Serviço"
      />

      <Box sx={{ pt: "80px" }}>
        <TitleDescription title={TITLE} description={DESCRIPTION} />
        {powerbi.map((item, index) => (
          <PowerBI key={index} src={item.src} />
        ))}
      </Box>

      <Box sx={{ py: "80px", backgroundColor: PALETTE.GRAY_300 }}>
        <TitleDescription
          title={"Documentação"}
          description={
            "Nesta secção pode consultar o histórico dos indicadores gerais da continuidade de serviço."
          }
        />
        <PaperAnexoDownload_Global
          hasTabsPAD={hasTabsPAD}
          documentLibrary={documentLibrary}
        />
      </Box>
    </>
  );
};
