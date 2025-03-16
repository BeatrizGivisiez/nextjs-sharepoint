"use client";

import { useEffect, useState } from "react";
import {
  BannerTitle,
  Breadcrumbs,
  CardIconDescription,
  Organograma,
  TabsGalleryDownload,
  TitleDescription,
  Tabs,
} from "@/components";
import Banner from "@/../public/img/eda/organizacao-banner.jpg";
import { Box, Container } from "@mui/material";
import { PALETTE } from "@/app/theme/styles/constantes";
import {
  TITLE,
  CARDICONDESCRIPTION,
  objTitleDescriptionOrganograma,
} from "../contants";
import { TabPanel } from "@mui/lab";
import { TabsGalleryDownloadResponse } from "@/components/Tabs/types";
import getCorporateBody from "../services/getCorporateBody";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import {
  tabsgallerydownload,
  tabsgallerydownload_box,
  tabsgallerydownload_grid,
  tabsgallerydownload_spacing,
} from "@/styles/TabsGalleryDownload";

export const OrganizacaoPage = () => {
  const [galleryDownload, setGalleryDownload] = useState<
    TabsGalleryDownloadResponse[]
  >([]);

  useEffect(() => {
    getCorporateBody().then((response) =>
      setGalleryDownload(response as TabsGalleryDownloadResponse[])
    );
  }, []);

  return (
    <Box>
      <BannerTitle src={Banner} title="Organização" />
      <Breadcrumbs category="EDA" mainPage="Organização" />

      <Box sx={tabsgallerydownload}>
        <Container sx={tabsgallerydownload_grid}>
          <TitleDescription title={TITLE} />
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

      <Box sx={{ pt: "80px", pb: "50px", bgcolor: PALETTE.GRAY_300 }}>
        {objTitleDescriptionOrganograma.map((item, index) => (
          <TitleDescription
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
        <Box sx={{ mt: "50px" }}>
          <Organograma />
        </Box>
      </Box>

      <Box sx={cardicondescription}>
        <TitleDescription title="Explore outros temas" />
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
    </Box>
  );
};
