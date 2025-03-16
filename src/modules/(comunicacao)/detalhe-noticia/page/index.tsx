"use client";

import { Suspense, useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
  Breadcrumbs,
  RecommendedNews,
  DescriptionNews,
  TitleDescription,
  Loading,
  RichText,
} from "@/components";
import { useSearchParams } from "next/navigation";
import { RECOMMENDED_DESCRIPTION, RECOMMENDED_TITLE } from "../constants";
import getDetailsNews from "../services/getDetailsNews";
import { INew } from "./types";
import { PALETTE } from "@/app/theme/styles/constantes";

const DetalheNoticiaContent = () => {
  const [selectedNews, setSelectedNews] = useState<INew>({} as INew);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const newsId = Number(searchParams.get("noticia")) || 0;
  const dateNews = selectedNews?.date || "";
  const title = selectedNews?.title || "";
  const description = selectedNews?.description || "";
  const img = selectedNews?.banner || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const selectedNewsData = await getDetailsNews(newsId);
        setSelectedNews(selectedNewsData);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, [newsId]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Breadcrumbs
        category="Comunicação"
        mainPage="Notícias"
        URLmainPage="/comunicacao/noticias"
        subPage={title}
      />

      <>
        <DescriptionNews
          dateNews={dateNews}
          title={title}
          description={description}
          img={img}
        >
          <RichText richText={selectedNews.body as string} />
        </DescriptionNews>
      </>

      <Box sx={{ backgroundColor: PALETTE.GRAY_300, pt: "40px", pb: "80px" }}>
        <TitleDescription
          title={RECOMMENDED_TITLE}
          description={RECOMMENDED_DESCRIPTION}
        />
        <RecommendedNews />
      </Box>
    </>
  );
};

export const DetalheNoticiaPage = () => {
  return (
    <Suspense>
      <DetalheNoticiaContent />
    </Suspense>
  );
};
