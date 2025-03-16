"use client";

import { useEffect, useState } from "react";
import {
  Breadcrumbs,
  ContainerAboutAction,
  RichText,
  TitleDescription,
} from "@/components";
import {
  CONTAINERABOUTACTION,
  DOWNLOAD_TITLE,
  DOWNLOAD_DESCRIPTION,
} from "../constants";
import { Box } from "@mui/material";
import { ArrowRight } from "@phosphor-icons/react";
import { RichTextProps } from "@/components/Typography/types";
import getRichText from "../services/getRichText";
import { IFile } from "@/components/Paper/types";
import getDocumentLibrary from "../services/getDocumentLibrary";
import PaperAnexoDownload_Global from "@/components/Paper/PaperAnexoDownload_Global";
import { PALETTE } from "@/app/theme/styles/constantes";

export const RegulamentoDeAcessoAsRedesEInterligacoesPage = () => {
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
        category="Regulação"
        mainPage="Regulamentos"
        URLmainPage="/regulacao/regulamentos"
        subPage="Regulamento de Acesso às Redes e às Interligações"
      />

      <Box sx={{ mt: { xs: "60px", sm: "80px" } }}>
        <TitleDescription title="Regulamento de Acesso às Redes e às Interligações" />
        <RichText richText={richText.length > 0 ? richText[0].richText : ""} />
      </Box>

      <Box sx={{ backgroundColor: PALETTE.GRAY_300, py:"40px" }}>
        <TitleDescription
          title={DOWNLOAD_TITLE}
          description={DOWNLOAD_DESCRIPTION}
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
            isBackground={false}
            buttonHref={item.buttonHref}
            mailto={item.mailto}
            contacto={item.contacto}
          />
        ))}
      </>
    </>
  );
};
