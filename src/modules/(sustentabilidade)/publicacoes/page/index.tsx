"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
  Breadcrumbs,
  CardIconDescription,
  RichText,
  TitleDescription,
} from "@/components";
import { RichTextProps } from "@/components/Typography/types";
import getRichText from "../services/getRichText";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import { CARDICONDESCRIPTION, TITLE } from "../constants";
import { PALETTE } from "@/app/theme/styles/constantes";
import { GalleryLeafletsResponse } from "@/components/Gallery/types";
import getGalleryleaflets from "../services/getGalleryLeaflets";
import { GalleryLeaflets_Global } from "@/components/Gallery/GalleryLeaflets_Global";

export const PublicacoesPage = () => {
  const [richText, setRichText] = useState<RichTextProps[]>([]);
  const [leaflets, setLeaflets] = useState<GalleryLeafletsResponse[]>([]);
  const [hasTabs, setHasTabs] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getRichText().then((response) => setRichText(response as []));
    const fetchLeaflets = async () => {
      try {
        const response = await getGalleryleaflets();
        const leafletsResponse =
          response as unknown as GalleryLeafletsResponse[];
        setLeaflets(leafletsResponse);
        if (
          leafletsResponse.length > 0 &&
          leafletsResponse[0]?.tabsLabel != null
        ) {
          setHasTabs(true);
        } else {
          setHasTabs(false);
        }
      } catch (error) {
        console.error("Error fetching leaflets:", error);
        setLeaflets([]);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaflets();
  }, []);

  return (
    <>
      <Breadcrumbs category="Sustentabilidade" mainPage="Publicações de Sustentabilidade" />

      <Box sx={{ mt: 10 }}>
        <TitleDescription title="Publicações de Sustentabilidade" />
        {/* <RichText richText={richText.length > 0 ? richText[0].richText : ""} /> */}
      </Box>

      <GalleryLeaflets_Global
        leaflets={leaflets}
        hasTabs={hasTabs}
        loading={loading}
      />

      <Box sx={{ ...cardicondescription, backgroundColor: PALETTE.GRAY_300 }}>
        <TitleDescription title={TITLE} />
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
