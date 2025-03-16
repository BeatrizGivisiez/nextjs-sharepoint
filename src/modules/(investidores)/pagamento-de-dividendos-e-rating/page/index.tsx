"use client";

import { PALETTE } from "@/app/theme/styles/constantes";
import {
  BannerTitle,
  Breadcrumbs,
  CardIconDescription,
  RichText,
  TitleDescription,
} from "@/components";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Banner from "@/../public/img/investidores/rating-banner.jpg";
import { RichTextProps } from "@/components/Typography/types";
import getRichText from "../services/getRichText";
import { IFile } from "@/components/Paper/types";
import getDocumentLibrary from "../services/getDocumentLibrary";
import { CARDICONDESCRIPTION, TITLEDESCRIPTION } from "../constants";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import PaperAnexoDownload_Global from "@/components/Paper/PaperAnexoDownload_Global";

export const PagamentoDeDividendosERatingPage = () => {
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
      <BannerTitle src={Banner} title="Pagamento de Dividendos e Rating" />
      <Breadcrumbs
        category={"Investidores"}
        mainPage={"Pagamento de Dividendos e Rating"}
      />
      <Box sx={{ pt: "80px" }}>
        <TitleDescription
          title={"Pagamento de Dividendos"}
          description={
            "O pagamento e o montante de dividendos a distribuir encontram-se sujeitos a proposta do Conselho de Administração e posterior aprovação da mesma em Assembleia Geral de Acionistas."
          }
        />

        <PaperAnexoDownload_Global
          hasTabsPAD={hasTabsPAD}
          documentLibrary={documentLibrary}
        />
      </Box>

      <Box sx={{ pt: "80px" }}>
        <TitleDescription title="Rating" />
        <RichText
          bgcolor={PALETTE.GRAY_300}
          richText={richText.length > 0 ? richText[0].richText : ""}
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
