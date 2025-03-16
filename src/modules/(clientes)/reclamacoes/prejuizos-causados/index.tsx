"use client";

import { Breadcrumbs, TitleDescription } from "@/components";
import { FormReclamacoesPrejuizosCausados } from "@/components/Form/FormReclamacoesPrejuizosCausados";
import { Box } from "@mui/material";

export const PrejuizosCausadosPage = () => {
  return (
    <>
      <Breadcrumbs category={"Reclamações"} URLcategory="/clientes/reclamacoes" mainPage="Prejuízos Causados" />
      <Box sx={{ py: "80px" }}>
        <TitleDescription
          title={"Reclamação - Prejuízos causados"}
          description={
            "Se ocorrerem danos em equipamentos elétricos resultantes de anomalias ou incidentes na rede elétrica e pretende apresentar uma reclamação, preeencha e envie o formulário abaixo."
          }
        />
      </Box>

      <Box sx={{ pb: "80px" }}>
        <FormReclamacoesPrejuizosCausados />
      </Box>
    </>
  );
};
