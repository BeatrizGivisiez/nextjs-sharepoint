"use client";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Breadcrumbs, TitleDescription } from "@/components";
import { GalleryLeafletsResponse } from "@/components/Gallery/types";
import getGalleryleaflets from "../services/getGalleryLeaflets";
import { GalleryLeaflets_Global } from "@/components/Gallery/GalleryLeaflets_Global";

const PublicacaoPage = () => {
  const [leaflets, setLeaflets] = useState<GalleryLeafletsResponse[]>([]);
  const [hasTabs, setHasTabs] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
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
    <Box>
      <Breadcrumbs category="Comunicação" mainPage="Publicações" />

      <Box sx={{ pt: "80px", pb: "50px" }}>
        <TitleDescription
          title="Publicações"
          description="Consulte documentos com informação relevante sobre a empresa e outras publicações relacionadas com a nossa atividade."
        />
      </Box>

      <GalleryLeaflets_Global
        leaflets={leaflets}
        hasTabs={hasTabs}
        loading={loading}
      />
    </Box>
  );
};

export default PublicacaoPage;
