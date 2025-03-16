"use client";

import { useMemo, useState } from "react";

import { PALETTE } from "@/app/theme/styles/constantes";
import { Breadcrumbs, PaperPesquisa, TitleDescription } from "@/components";
import { HEADER, IHeaderItem } from "@/components/Header/constants/index";
import { PAGE_REGULAMENTOS } from "@/modules/(regulacao)/regulamentos/constants";
import { PAGE_APOIO_AO_CLIENTE } from "@/modules/apoio-ao-cliente/constants";
import { PAGE_GRUPOEDA } from "@/modules/grupo-eda/constants";
import { PAGE_HOME } from "@/modules/home/constants";
import { handleSearchStaticPages } from "@/util/searchStaticPages";
import { Box, Button, TextField, Typography } from "@mui/material";
import { MagnifyingGlass } from "@phosphor-icons/react";

import getSearch from "./services/getSearch";
import {
  pesquisar_box,
  pesquisar_box_button,
  pesquisar_box_result,
  pesquisar_button,
  pesquisar_container,
  pesquisar_result,
} from "./styles";

interface ISearchResponse {
  pageTitle: string;
  pageUrl: string;
  pageDescription: string;
}

export const PesquisaPage = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState<ISearchResponse[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const headerContent = useMemo<IHeaderItem[]>(() => {
    const array: IHeaderItem[] = [];
    HEADER.map((item) => {
      array.push(...item.links);
    });
    return array;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, HEADER);

  const getHeaderTitle = (path: string) => {
    const newUrl = new URL(path);
    const resultTitle = headerContent.filter((i) => i.url == newUrl.pathname);
    return resultTitle[0]?.text ?? "";
  };

  const handleSearch = async () => {
    setIsSearching(true);
    if (!value.trim()) {
      setResults([]);
      return;
    }
    const response = await getSearch(value);
    // console.log(response)
    response.map((r: ISearchResponse) => {
      if (r.pageTitle == "") {
        const headerName = getHeaderTitle(r.pageUrl);
        r.pageTitle = headerName;
      }
    });
    setResults(response);
    const staticResults = handleSearchStaticPages(value, [
      PAGE_APOIO_AO_CLIENTE,
      PAGE_REGULAMENTOS,
      PAGE_HOME,
      PAGE_GRUPOEDA,
    ]);
    setResults((e) => [...e, ...staticResults]);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <Breadcrumbs category="Home" mainPage="Pesquisa" />

      {isSearching && (
        <>
          <Box sx={{ py: { xs: "30px", sm: "40px", md: "60px", lg: "80px" } }}>
            <TitleDescription
              title={`Resultados encontrados para "${value}"`}
            />
          </Box>
          <Box sx={pesquisar_box_button}>
            <Box sx={pesquisar_box}>
              <TextField
                id="outlined-basic"
                label="Pesquise por palavras-chave"
                variant="outlined"
                fullWidth
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Button
                sx={pesquisar_button}
                variant="contained"
                href=""
                onClick={handleSearch}
                endIcon={
                  <MagnifyingGlass
                    weight="regular"
                    size={22}
                    color={PALETTE.BLACK}
                  />
                }
              >
                Pesquisar
              </Button>
            </Box>
          </Box>
          <Box sx={pesquisar_box_result}>
            <Box sx={pesquisar_container}>
              <Typography sx={pesquisar_result}>
                {results.length} Resultados
              </Typography>
              {results.map((item, index) => (
                <PaperPesquisa
                  key={index}
                  title={item.pageTitle}
                  description={item.pageDescription}
                  url={item.pageUrl}
                />
              ))}
            </Box>
          </Box>
        </>
      )}

      {!isSearching && (
        <>
          <Box sx={{ py: { xs: "30px", sm: "40px", md: "60px", lg: "80px" } }}>
            <TitleDescription
              title={"Encontre os conteúdos que precisa"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
              }
            />
          </Box>
          <Box sx={pesquisar_box_button}>
            <Box sx={pesquisar_box}>
              <TextField
                id="outlined-basic"
                label="Pesquise por palavras-chave"
                variant="outlined"
                fullWidth
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Button
                sx={pesquisar_button}
                variant="contained"
                href=""
                onClick={handleSearch}
                endIcon={
                  <MagnifyingGlass
                    weight="regular"
                    size={22}
                    color={PALETTE.BLACK}
                  />
                }
              >
                Pesquisar
              </Button>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};
