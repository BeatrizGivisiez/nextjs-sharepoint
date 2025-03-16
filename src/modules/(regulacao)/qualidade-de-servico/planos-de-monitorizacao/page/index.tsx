"use client";

import {
  Breadcrumbs,
  ContainerAboutAction,
  TitleDescription,
} from "@/components";
import { Box } from "@mui/material";
import { ArrowRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { IFile } from "@/components/Paper/types";
import getDocumentLibrary from "../services/getDocumentLibrary";
import { CONTAINERABOUTACTION } from "../constantes";
import PaperAnexoDownload_Global from "@/components/Paper/PaperAnexoDownload_Global";

export const PlanosDeMonitorizacaoPage = () => {
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
        subPage="Planos de Monitorização"
      />

      <Box sx={{ pt: "80px" }}>
        <TitleDescription
          title={"Planos de Monitorização"}
          description={
            "De acordo com o Regulamento da Qualidade de Serviço, os operadores das redes de transporte e distribuição devem desenvolver planos de monitorização da qualidade de energia elétrica que permitam proceder a uma caracterização do desempenho das respetivas redes e verificar o cumprimento dos limites estabelecidos para as diferentes características da onda de tensão. A definição dos planos de monitorização é realizada conforme definido no Manual de Procedimentos da Qualidade de Serviço.\n\nPode consultar aqui os planos de monitorização da EDA."
          }
        />

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
          icon={ArrowRight}
          isBackground={true}
          buttonHref={item.buttonHref}
          mailto={item.mailto}
          contacto={item.contacto}
        />
      ))}
    </>
  );
};
