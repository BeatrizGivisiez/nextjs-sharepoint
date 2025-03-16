"use client";

import {
  Breadcrumbs,
  RichText,
  Tabs,
  TabsGalleryDownload,
  TitleDescription,
} from "@/components";
import { TabPanel } from "@mui/lab";
import { Box, Container } from "@mui/material";
import getRichText from "../services/getRichText";
import { useEffect, useState } from "react";
import { RichTextProps } from "@/components/Typography/types";
import { TabsGalleryDownloadResponse } from "@/components/Tabs/types";
import getCorporateBody from "../services/getCorporateBody";
import getDocumentLibrary from "../services/getDocumentLibrary";
import { IFile } from "@/components/Paper/types";
import {
  tabsgallerydownload,
  tabsgallerydownload_box,
  tabsgallerydownload_grid,
  tabsgallerydownload_spacing,
} from "@/styles/TabsGalleryDownload";
import PaperAnexoDownload_Global from "@/components/Paper/PaperAnexoDownload_Global";

export const ServicosDeEngenhariaGestaoEManutencaoPage = () => {
  const [richText, setRichText] = useState<RichTextProps[]>([]);
  const [galleryDownload, setGalleryDownload] = useState<
    TabsGalleryDownloadResponse[]
  >([]);
  const [documentLibrary, setDocumentLibrary] = useState<IFile[]>([]);
  const [hasTabsPAD, setHasTabsPAD] = useState<boolean>(false);

  useEffect(() => {
    getRichText().then((response) => setRichText(response as []));
    getCorporateBody().then((response) =>
      setGalleryDownload(response as TabsGalleryDownloadResponse[])
    );
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
        mainPage="Grupo EDA"
        URLmainPage="/grupo-eda"
        subPage="SEGMA"
      />
      <Box sx={{ py: "80px" }}>
        <TitleDescription
          title={"SEGMA"}
          description={
            "A SEGMA tem por objetivo prestar serviços na área de engenharia e tem vindo, progressivamente, a alargar a sua atividade a novos e mais exigentes segmentos de mercado."
          }
        />
      </Box>

      <TitleDescription title="Ficha da Empresa" />
      <RichText richText={richText.length > 0 ? richText[0].richText : ""} />

      <Box sx={tabsgallerydownload}>
        <TitleDescription
          title={"Órgãos Sociais"}
          description={
            "Fique a par de todas as informações sobre os órgãos sociais do triénio de 2022/2024."
          }
        />
        <Container sx={tabsgallerydownload_grid}>
          {galleryDownload.length > 0 && (
            <Tabs idTabs={galleryDownload} isId={false} tabOpen={1}>
              <Box sx={tabsgallerydownload_spacing}>
                {galleryDownload?.map((tab, index) => (
                  <Box sx={tabsgallerydownload_box} key={index}>
                    <TabPanel value={tab.value}>
                      {tab.members.map((member, memberIndex) => (
                        <>
                          <TabsGalleryDownload
                            key={memberIndex}
                            photo={member.photo}
                            jobTitle={member.jobTitle}
                            name={member.name}
                            cv={member.cv}
                          />
                        </>
                      ))}
                    </TabPanel>
                  </Box>
                ))}
              </Box>
            </Tabs>
          )}
        </Container>
      </Box>

      <Box sx={{ py: "80px" }}>
        <TitleDescription
          title={"Documentação"}
          description={"Consulte os documentos relacionados com a empresa."}
        />
        <PaperAnexoDownload_Global
          hasTabsPAD={hasTabsPAD}
          documentLibrary={documentLibrary}
        />
      </Box>
    </>
  );
};
