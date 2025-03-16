"use client";

import {
  Breadcrumbs,
  CardIconDescription,
  InfoImageActionButton,
  RichText,
  TitleDescription,
} from "@/components";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import img from "@/../public/img/clientes/Telecontagem.gif";
import { RichTextProps } from "@/components/Typography/types";
import getRichText from "../services/getRichText";
import { IFile } from "@/components/Paper/types";
import getDocumentLibrary from "../services/getDocumentLibrary";
import { CARDICONDESCRIPTION, TITLEDESCRIPTION } from "../constants";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import { PALETTE } from "@/app/theme/styles/constantes";
import PaperAnexoDownload_Global from "@/components/Paper/PaperAnexoDownload_Global";

export const TelecontagemPage = () => {
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
      <Breadcrumbs category={"Clientes"} mainPage={"Telecontagem"} />

      <Box sx={{ mt: 10 }}>
        <TitleDescription title={"Telecontagem"} />
        <RichText richText={richText.length > 0 ? richText[0].richText : ""} />
      </Box>

      <Box sx={{ py: "80px" }}>
        <InfoImageActionButton
          title={"Aceda à nossa página de Telecontagem"}
          subtitle={""}
          buttonPrimary={"EDA Telecontagem"}
          buttonPrimaryHref={"https://telecontagem.eda.pt/webclient/index.html"}
          iconButtonPrimary={ArrowRight}
          imageAlt={"Telecontagem"}
          imageSrc={img}
          grayBackground={true}
          reverse={false}
          containImg={true}
        />

        <Box sx={{ pt: "80px" }}>
          <TitleDescription title={"Documentação"} />
          <PaperAnexoDownload_Global
          hasTabsPAD={hasTabsPAD}
          documentLibrary={documentLibrary}
        />
        </Box>
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
