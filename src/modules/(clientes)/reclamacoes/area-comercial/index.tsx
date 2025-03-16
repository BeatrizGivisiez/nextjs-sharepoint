"use client";

import { Breadcrumbs, TitleDescription } from "@/components";
import { FormReclamacoesAreaComercial } from "@/components/Form/FormReclamacoesAreaComercial";
import { Box } from "@mui/material";

export const ReclamacoesAreaComercialPage = () => {
  return (
    <>
      <Breadcrumbs category={"Reclamações"} URLcategory="/clientes/reclamacoes" mainPage="Área Comercial" />
      <Box sx={{ py: "80px" }}>
        <TitleDescription
          title={"Reclamação - Área comercial"}
          description={
            "Se pretende efetuar uma reclamção sobre assuntos relacionados com atendimento, leituras, faturação, cobranças ou outro assunto, preencha e envie o formulário abaixo."
          }
        />
      </Box>

      <Box sx={{ pb: "80px" }}>
        <FormReclamacoesAreaComercial />
      </Box>
    </>
  );
};
