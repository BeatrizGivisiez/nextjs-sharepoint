"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { baseURL } from "@/util/baseURL";
import { Box, Button, Link, Typography } from "@mui/material";

import { Loading } from "../";
import {
  cardnews,
  cardnews_box,
  cardnews_container,
  cardnews_data,
  cardnews_description,
  cardnews_paper,
  cardnews_title,
} from "./styles";
import { formatDate } from "@/util/formatDate";

export const RecommendedNews = () => {
  const router = useRouter();
  const [apiData, setApiData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleClick = (id: number) => {
    const url = `/comunicacao/detalhe-noticia?noticia=${id}`;
    router.push(url);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${baseURL}/HighlightedNews/Get/%2Fcomunicacao%2Fdetalhe-noticia`
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar dados da API");
        }
        const data = await response.json();
        const highlightedNewsList = data.highlightedNewsList || [];
        setApiData(highlightedNewsList);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Box sx={cardnews}>
      <Box sx={cardnews_container}>
        {apiData.map((news) => (
          <Button
            component={Link}
            key={news.id}
            sx={cardnews_paper}
            onClick={() => handleClick(news.id)}
            href={`/comunicacao/detalhe-noticia?noticia=${news.id}`}
          >
            {news.banner && <img src={news.banner} alt="Image Banner" />}
            <Box sx={cardnews_box}>
              <Typography sx={cardnews_data}>
                {formatDate(news.date)}
              </Typography>
              <Typography sx={cardnews_title}>
                {news.title.length > 50
                  ? `${news.title.slice(0, 50)}...`
                  : news.title}
              </Typography>
              <Typography sx={cardnews_description}>
                {news.description?.length ?? 0 > 80
                  ? `${news.description.slice(0, 80)}...`
                  : news.description}
              </Typography>
            </Box>
          </Button>
        ))}
      </Box>
    </Box>
  );
};
