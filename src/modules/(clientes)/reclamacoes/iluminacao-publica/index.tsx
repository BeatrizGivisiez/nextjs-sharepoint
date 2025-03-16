"use client";

import { Breadcrumbs, TitleDescription } from "@/components";
import { FormReclamacoesIluminacaoPublica } from "@/components/Form/FormReclamacoesIluminacaoPublica";
import { Box } from "@mui/material";

export const IluminacaoPublicaPage = () => {
  return (
    <>
      <Breadcrumbs category={"Reclamações"} URLcategory="/clientes/reclamacoes" mainPage="Iluminação Pública" />
      <Box sx={{ py: "80px" }}>
        <TitleDescription
          title={"Reclamação - Iluminação pública"}
          description={
            "Se detetou uma avaria na Rede de Iluminação Pública (rua às escuras, iluminárias fundidas, etc), agradecemos que nos remeta o formulário abaixo devidamente preenchido. Deverá verificar no poste se se trata de uma luminária desligada ao abrigo do Programa de Poupança Energética."
          }
        />
      </Box>

      <Box sx={{ pb: "80px" }}>
        <FormReclamacoesIluminacaoPublica />
      </Box>
    </>
  );
};
