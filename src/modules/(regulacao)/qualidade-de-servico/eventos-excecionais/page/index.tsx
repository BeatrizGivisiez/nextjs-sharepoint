"use client";

import {
  Breadcrumbs,
  ContainerAboutAction,
  Tabs,
  TitleDescription,
} from "@/components";
import { Box } from "@mui/material";

import { TabPanel } from "@mui/lab";
import { ArrowRight } from "@phosphor-icons/react";
import { IFile } from "@/components/Paper/types";
import { useEffect, useState } from "react";
import getDocumentLibrary from "../services/getDocumentLibrary";
import {
  paperanexodownload,
  paperanexodownload_box,
  paperanexodownload_container,
} from "./styles";
import { CONTAINERABOUTACTION } from "../constantes";
import PaperAnexoDownload_Global from "@/components/Paper/PaperAnexoDownload_Global";

export const EventosExcepcionaisPage = () => {
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
        subPage="Eventos Excecionais"
      />

      <Box sx={{ pt: "80px" }}>
        <TitleDescription
          title={"Eventos Excecionais"}
          description={
            "Conforme estabelecido no Regulamento da Qualidade de Serviço, consideram-se eventos excecionais os que reúnem cumulativamente as seguintes características:\n" +
            "- Baixa probabilidade de ocorrência do evento ou das suas consequências;\n" +
            "- Provoquem uma significativa diminuição da qualidade de serviço prestada;\n" +
            "- Não seja razoável, em termos económicos, evitar a totalidade das suas consequências;\n" +
            "- O evento e as suas consequências não sejam imputáveis aos operadores de redes, agregadores, comercializadores ou, no caso da RAA e da RAM, aos produtores de energia elétrica.\n\n" +
            "Um evento só é considerado evento excecional após aprovação pela ERSE, na sequência de pedido fundamentado, e permite:\n" +
            "- A identificação do contributo específico do evento nos indicadores de qualidade de serviço;\n" +
            "- Não seja tido em conta o contributo do evento para efeitos de comparação com os respetivos padrões;\n" +
            "- Não sejam pagas compensações por incumprimentos de padrões ou obrigações individuais de qualidade de serviço.\n" +
            "\nPode consultar aqui os eventos excecionais, aprovados pela ERSE."
          }
        />
      </Box>

      <PaperAnexoDownload_Global
          hasTabsPAD={hasTabsPAD}
          documentLibrary={documentLibrary}
        />

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
