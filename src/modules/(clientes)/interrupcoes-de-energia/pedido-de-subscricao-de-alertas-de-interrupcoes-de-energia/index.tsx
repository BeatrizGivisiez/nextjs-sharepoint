"use client";

import { Breadcrumbs, TitleDescription } from "@/components";
import { FormPedidoDeSubscricaoDeAlertasDeInterrupcoesDeEnergia } from "@/components/Form/FormPedidoDeSubscricaoDeAlertasDeInterrupcoesDeEnergia";
import { Box } from "@mui/material";

export const PedidoDeSubscricaoDeAlertasDeInterrupcoesDeEnergiaPage = () => {
  return (
    <>
      <Breadcrumbs
        category="Clientes"
        mainPage="Interrupções de Energia"
        URLmainPage="/clientes/interrupcoes-de-energia"
        subPage="Subscrição de Alertas de Interrupções de Energia"
      />
      <Box sx={{ py: "80px" }}>
        <TitleDescription
          title={"Subscrição de Alertas de Interrupções de Energia"}
          description={
            "Selecione as localizações (até ao máximo de 5 Concelhos ou Freguesias) para as quais pretende receber notificações de Interrupções de Energia."
          }
        />
      </Box>
      <Box sx={{ pb: "160px" }}>
        <FormPedidoDeSubscricaoDeAlertasDeInterrupcoesDeEnergia />
      </Box>
    </>
  );
};
