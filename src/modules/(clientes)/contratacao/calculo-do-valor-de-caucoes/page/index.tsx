"use client";
import Image from "next/image";

import Caucoes from "@/../public/img/clientes/contratacao-caucoes.png";
import { Breadcrumbs, TitleDescription } from "@/components";
import { Box } from "@mui/material";

import { box, container } from "./styles";

export const CalculoDoValorDeCaucoesPage = () => {
  return (
    <>
      <Breadcrumbs
        category={"Clientes"}
        mainPage="Contratação"
        URLmainPage="/clientes/contratacao"
        subPage="Cálculo do Valor de Cauções"
      />

      <Box sx={{ py: { xs: 6, sm: 10 } }}>
        <TitleDescription
          title="Cálculo do valor de cauções"
          description={
            "O despacho ERSE n.º 9975/2009, de 14 de abril, estabelece as regras e fórmulas aplicáveis ao cálculo do valor das cauções a praticar pela concessionária do transporte e distribuição da Região Autónoma dos Açores (RAA). \n\nPelo disposto no n.º 3 dos artigos 2º e 3º do Anexo ao referido despacho, a concessionária do transporte e distribuição da RAA tem por obrigação o cálculo e publicação dos parâmetros k e Hu relativos a 2023, utilizados nas fórmulas de cálculo do valor da caução. \n\nAssim, os valores para 2024 dos referidos parâmetros são os constantes no quadro seguinte:"
          }
        />

        <Box sx={box}>
          <Box sx={container}>
            <Image
              src={Caucoes}
              alt="Cálculo do Valor de Cauções"
              width={900}
              layout="responsive"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
