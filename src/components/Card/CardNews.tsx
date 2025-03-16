"use client";

import { useEffect, useState } from "react";

import { PALETTE } from "@/app/theme/styles/constantes";
import getCardNews from "@/modules/(comunicacao)/noticias/services/getCardNews";
import { tabsPosts_button } from "@/styles/GalleryLeaflets";
import { formatDate } from "@/util/formatDate";
import { Box, Button, CircularProgress, Link, Typography } from "@mui/material";
import { ArrowDown } from "@phosphor-icons/react";

import { Loading } from "../Loading/Loading";
import {
  cardnews,
  cardnews_box,
  cardnews_container,
  cardnews_data,
  cardnews_description,
  cardnews_paper,
  cardnews_title,
} from "./styles";
import { CardNewsProps } from "./types";

export const CardNews = ({
  apiData,
  loading,
  error,
  handleClick,
}: CardNewsProps) => {
  const [visibleItems, setVisibleItems] = useState<number>(6);
  const [loadingCardNews, setLoadingCardnews] = useState(false);
  const [newApiData, setNewApiData] = useState<any[]>(apiData);
  const [newError, setNewError] = useState<string | null>(error);

  useEffect(() => {
    setNewApiData(apiData);
  }, [apiData]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleSeeMore = async () => {
    try {
      const newVisibleItems = visibleItems + 6;
      setLoadingCardnews(true);
      const data = await getCardNews(1, newVisibleItems);
      setNewApiData(data);
      setLoadingCardnews(false);
      setVisibleItems(newVisibleItems);
    } catch (error) {
      setNewError("Erro ao buscar dados da API: ");
      setLoadingCardnews(false);
    }
  };

  if (newError) {
    return <div>{newError}</div>;
  }

  return (
    <Box sx={cardnews}>
      <Box sx={cardnews_container}>
        {newApiData.map((news: any, index: number) => (
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
                {news.banner ? (
                  <>
                    {news.description?.length > 80
                      ? `${news.description.slice(0, 80)}...`
                      : news.description}
                  </>
                ) : (
                  <>
                    {news.description?.length > 190
                      ? `${news.description.slice(0, 190)}...`
                      : news.description}
                  </>
                )}
              </Typography>
            </Box>
          </Button>
        ))}
      </Box>
      {/* "See more" button outside the individual news cards */}
      {visibleItems <= newApiData.length && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Button
            sx={tabsPosts_button}
            onClick={handleSeeMore}
            variant="contained"
            endIcon={
              loadingCardNews ? (
                <CircularProgress size={20} color={"inherit"} />
              ) : (
                <ArrowDown weight="regular" size={22} color={PALETTE.BLACK} />
              )
            }
            disabled={loadingCardNews}
          >
            Carregar mais notícias
          </Button>
        </Box>
      )}
    </Box>
  );
};
