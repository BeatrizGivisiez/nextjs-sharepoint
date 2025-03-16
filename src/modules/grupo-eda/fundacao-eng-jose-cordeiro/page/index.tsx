"use client";

import { useEffect, useState } from "react";

import { PALETTE } from "@/app/theme/styles/constantes";
import {
  Breadcrumbs,
  RichText,
  Tabs,
  TabsGalleryDownload,
  TitleDescription,
} from "@/components";
import PaperAnexoDownload_Global from "@/components/Paper/PaperAnexoDownload_Global";
import { IFile } from "@/components/Paper/types";
import { TabsGalleryDownloadResponse } from "@/components/Tabs/types";
import { RichTextProps } from "@/components/Typography/types";
import {
  tabsgallerydownload,
  tabsgallerydownload_box,
  tabsgallerydownload_grid,
  tabsgallerydownload_spacing,
} from "@/styles/TabsGalleryDownload";
import { TabPanel } from "@mui/lab";
import { Box, Container } from "@mui/material";

import getCorporateBody from "../services/getCorporateBody";
import getDocumentLibrary from "../services/getDocumentLibrary";
import getRichText from "../services/getRichText";

export const FundacaoEngJoseCordeiroPage = () => {
  const [richText, setRichText] = useState<RichTextProps[]>([]);
  const [galleryDownload, setGalleryDownload] = useState<
    TabsGalleryDownloadResponse[]
  >([]);
  const [documentLibrary, setDocumentLibrary] = useState<IFile[]>([]);
  const [hasTabsPAD, setHasTabsPAD] = useState<boolean>(false);

  useEffect(() => {
    getRichText().then((response) => setRichText(response as []));
    getCorporateBody().then((response: TabsGalleryDownloadResponse[]) =>
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
        subPage="Fundação Engenheiro José Cordeiro"
      />
      <Box sx={{ py: "80px" }}>
        <TitleDescription
          title={"Fundação Engenheiro José Cordeiro"}
          description={
            "A Fundação Engenheiro José Cordeiro tem por objetivo a promoção da ciência e da cultura científica na Região Autónoma dos Açores.\n" +
            "A intervenção da Fundação ao longo do tempo destaca-se pela concessão de bolsas de estudo para a frequência de cursos superiores e de especialização, no apoio à inovação tecnológica, e no apoio a publicações de obras de carácter científico, histórico e cultural. Está também habilitada a promover ações de formação, simpósios, colóquios e, em geral, ações que visem promover o enriquecimento e atualização de conhecimentos científicos."
          }
        />
      </Box>

      <Box>
        <TitleDescription title="Ficha da Empresa" />
        <RichText richText={richText.length > 0 ? richText[0].richText : ""} />
      </Box>

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

      <Box sx={{ backgroundColor: PALETTE.GRAY_300, py: "80px" }}>
        <TitleDescription
          title={"Documentação"}
          description={"Consulte os documentos relacionados com a Fundação."}
        />
        <PaperAnexoDownload_Global
          hasTabsPAD={hasTabsPAD}
          documentLibrary={documentLibrary}
        />
      </Box>
    </>
  );
};
