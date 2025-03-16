"use client";

import { Breadcrumbs, TitleDescription } from "@/components";
import { FormPedidoDeSubscricaoDeAlertasDeInterrupcoesDeEnergia } from "@/components/Form/FormPedidoDeSubscricaoDeAlertasDeInterrupcoesDeEnergia";
import { Box } from "@mui/material";

export const PedidoDeSubscricaoDeAlertasDeInterrupcoesDeEnergiaPage = () => {
  return (
    <>
      <Breadcrumbs
        category="Clientes"
        mainPage="Pedido de subscrição de alertas de Interrupção de Energia"
      />
      <Box sx={{ py: "80px" }}>
        <TitleDescription
          title={"Pedido de subscrição de alertas de Interrupção de Energia"}
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
