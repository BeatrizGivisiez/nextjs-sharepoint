"use client";

import {
  Breadcrumbs,
  ContainerAboutAction,
  TitleDescription,
} from "@/components";
import { Box } from "@mui/material";
import { IFile } from "@/components/Paper/types";
import { useEffect, useState } from "react";
import getDocumentLibrary from "../services/getDocumentLibrary";
import { ArrowRight } from "@phosphor-icons/react";
import { CONTAINERABOUTACTION } from "../constantes";
import PaperAnexoDownload_Global from "@/components/Paper/PaperAnexoDownload_Global";

export const RelatoriosDeQualidadeDeServicoPage = () => {
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
        subPage="Relatórios da Qualidade de Serviço"
      />

      <Box sx={{ py: "80px" }}>
        <TitleDescription
          title={"Relatórios da Qualidade de Serviço"}
          description={
            "Conforme estabelecido no Regulamento da Qualidade de Serviço, compete à EDA, enquanto entidade concessionária do transporte e distribuição de energia elétrica da Região Autónoma dos Açores, elaborar, anualmente, o relatório da qualidade de serviço. Em cumprimento do estabelecido nesse regulamento, pode consultar aqui os relatórios anuais e os respetivos anexos que apresentam os indicadores que caracterizam a continuidade de serviço, a qualidade da onda de tensão e a qualidade de serviço de âmbito comercial."
          }
        />
        <PaperAnexoDownload_Global
          hasTabsPAD={hasTabsPAD}
          documentLibrary={documentLibrary}
        />
      </Box>

      <>
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
    </>
  );
};
