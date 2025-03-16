'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CardNews, TitleDescription, Breadcrumbs, Loading } from "@/components";
import { Box } from "@mui/material";
import { DESCRIPTION, TITLE } from "../constants";
import getCardNews from "../services/getCardNews";

export const NoticiasPage = () => {
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
        setLoading(true);
        const data = await getCardNews(1, 6);
        setApiData(data);
      } catch (error) {
        setError("Erro ao buscar dados da API");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [])

  return (
    <Box>
      <Breadcrumbs category="Comunicação" mainPage="Notícias" />

      <Box sx={{ pt: "80px", pb: "50px" }}>
        <TitleDescription title={TITLE} description={DESCRIPTION} />
      </Box>

      <Box sx={{ pb: "50px" }}>
        <CardNews
          apiData={apiData}
          loading={loading}
          error={error}
          handleClick={handleClick}
        />
      </Box>
    </Box>
  );
};
