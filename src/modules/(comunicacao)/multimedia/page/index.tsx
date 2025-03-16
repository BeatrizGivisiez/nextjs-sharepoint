"use client";
import React, { useEffect, useState } from "react";
import {
  BannerTitle,
  Breadcrumbs,
  Multimedia,
  Tabs,
  TitleDescription,
} from "@/components";
import {
  tabsgallerydownload,
  tabsgallerydownload_box,
  tabsgallerydownload_grid,
  tabsgallerydownload_spacing,
} from "@/styles/TabsGalleryDownload";
import Banner from "@/../public/img/comunicacao/multimedia-banner.jpg";
import { Box, Container } from "@mui/material";
import { TabPanel } from "@mui/lab";
import { MultimediaResponse } from "@/components/Multimedia/types";

import getMultimediaVideo from "../services/getMultimediaVideo";
import getMultimediaLogo from "../services/getMultimediaLogo";
import { section, section_gray } from "@/styles/Section";

export const MultimediaPage = () => {
  const [multimediaLogo, setMultimediaLogo] = useState<MultimediaResponse[]>([]);
  const [multimediaVideo, setMultimediaVideo] = useState<MultimediaResponse[]>([]);
  const [videoPosters, setVideoPosters] = useState<Record<string, string>>({});

  useEffect(() => {
    getMultimediaLogo().then((response) =>
      setMultimediaLogo(response as MultimediaResponse[])
    );
    getMultimediaVideo().then((response) =>
      setMultimediaVideo(response as MultimediaResponse[])
    );
  }, []);

  

  return (
    <>
      <BannerTitle src={Banner} title={"Multimédia"} />
      <Breadcrumbs category={"Comunicação"} mainPage="Multimédia" />
      <Box sx={section}>
        <Box sx={tabsgallerydownload}>
          <TitleDescription title={"Galeria de Imagens"} description={""} />
          <Container sx={tabsgallerydownload_grid}>
            {multimediaLogo.length !== 0 && (
              <Tabs idTabs={multimediaLogo} isId={false}>
                <Box sx={tabsgallerydownload_spacing}>
                  {multimediaLogo.map((tab, index) => (
                    <Box sx={tabsgallerydownload_box} key={`image_${index}`}>
                      <TabPanel value={tab.value}>
                        {tab.multimedia.map(
                          (media) =>
                            media.logo && (
                              <Multimedia
                                key={media.id}
                                logo={media.logo}
                                title={media.title}
                              />
                            )
                        )}
                      </TabPanel>
                    </Box>
                  ))}
                </Box>
              </Tabs>
            )}
          </Container>
        </Box>
      </Box>

      <Box sx={section_gray}>
        <Box
          sx={{
            ...tabsgallerydownload,
          }}
        >
          <TitleDescription title={"Galeria de Vídeos"} description={""} />
          <Container sx={tabsgallerydownload_grid}>
            {multimediaVideo.length !== 0 && (
              <Tabs idTabs={multimediaVideo} isId={false}>
                <Box sx={tabsgallerydownload_spacing}>
                  {multimediaVideo.map((tab, index) => (
                    <Box sx={tabsgallerydownload_box} key={`video_${index}`}>
                      <TabPanel value={tab.value}>
                        {tab.multimedia.map(
                          (media) =>
                            media.video && (
                              <Multimedia
                                key={media.id}
                                video={media.video}
                                title={media.title}
                              />
                            )
                        )}
                      </TabPanel>
                    </Box>
                  ))}
                </Box>
              </Tabs>
            )}
          </Container>
        </Box>
      </Box>
    </>
  );
};
