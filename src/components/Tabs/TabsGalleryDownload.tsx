"use client";
import Image from "next/image";
import * as React from "react";

import { PALETTE } from "@/app/theme/styles/constantes";
import { Box, Button, Typography } from "@mui/material";
import { Download } from "@phosphor-icons/react";

import {
  tabsGalleryDownload,
  tabsGalleryDownload_button,
  tabsGalleryDownload_card,
  tabsGalleryDownload_cardName,
  tabsGalleryDownload_cardTitle,
  tabsGalleryDownload_textStacker,
} from "./style";
import { TabsGalleryDownloadProps } from "./types";

export const TabsGalleryDownload = ({
  id,
  photo,
  jobTitle,
  name,
  cv,
}: TabsGalleryDownloadProps) => {
  return (
    <>
      {photo ? (
        <Box sx={tabsGalleryDownload_card}>
          <Image
            objectFit="contain"
            src={photo ?? ""}
            alt="Image Banner"
            width={100}
            height={100}
            layout="responsive"
          />
          <Box sx={tabsGalleryDownload_textStacker}>
            <Typography sx={tabsGalleryDownload_cardTitle}>
              {jobTitle}
            </Typography>
            <Typography sx={tabsGalleryDownload_cardName}>{name}</Typography>
            {cv ? (
              <Button
                sx={tabsGalleryDownload_button}
                variant="contained"
                endIcon={
                  <Download weight="regular" size={22} color={PALETTE.BLACK} />
                }
                onClick={() => window.open(cv ?? "", "_blank")}
              >
                Curriculum vitae
              </Button>
            ) : null}
          </Box>
        </Box>
      ) : (
        <Box sx={tabsGalleryDownload}>
          <Box sx={tabsGalleryDownload_textStacker}>
            <Typography sx={tabsGalleryDownload_cardTitle}>
              {jobTitle}
            </Typography>
            <Typography sx={tabsGalleryDownload_cardName}>{name}</Typography>
          </Box>
        </Box>
      )}
    </>
  );
};
