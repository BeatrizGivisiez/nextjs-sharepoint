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

export const AuditoriaAQualidadeDeServicoPage = () => {
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
        subPage="Auditoria à Qualidade de Serviço"
      />

      <Box sx={{ pt: "80px" }}>
        <TitleDescription
          title={"Auditoria à Qualidade de Serviço"}
          description={
            "Conforme estabelecido no Regulamento da Qualidade de Serviço, as entidades abrangidas pelo regulamento devem recorrer a mecanismos de auditoria, sempre que previsto regulamentarmente ou que seja determinado pela ERSE.\n" +
            "\nPode consultar aqui o relatório de auditoria à continuidade de serviço da EDA."
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
