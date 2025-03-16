"use client";

import { Breadcrumbs, TitleDescription } from "@/components";
import { FormPedidoDeFornecimentoDeEnergia } from "@/components/Form/FormPedidoDeFornecimentoDeEnergia";
import { Box } from "@mui/material";

export const PedidoDeFornecimentoDeEnergiaPage = () => {
  return (
    <>
      <Breadcrumbs category="Clientes" mainPage={"Fornecimento de Energia"} URLmainPage={"/clientes/fornecimento-de-energia"} subPage={"Pedido de fornecimento de energia"} />
      <Box sx={{ py: "80px" }}>
        <TitleDescription
          title={"Pedido de Fornecimento de Energia"}
          description={
            "Para solicitar o fornecimento de energia de Baixa Tensão, preencha e envie o presente formulário. Deve incluir ficheiro com digitalização da Ficha Eletrónica e Planta ou Croqui da localização com a indicação, legível, do local onde prentende."
          }
        />
      </Box>

      <Box sx={{ pb: "80px" }}>
        <FormPedidoDeFornecimentoDeEnergia />
      </Box>
    </>
  );
};
