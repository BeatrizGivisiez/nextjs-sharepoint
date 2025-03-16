"use client";

import {
  Breadcrumbs,
  CommercializationView,
  TitleDescription,
} from "@/components";
import { CommercializationProvider } from "@/contexts/CommercializationContext";
import { Box } from "@mui/material";

export const LojasEAgentesPage = () => {
  return (
    <>
      <Breadcrumbs category="Lojas e Agentes"/>
      <Box sx={{ py: "80px" }}>
        <TitleDescription
          title={"Lojas e Agentes"}
          description={
            "Conheça a nossa rede comercial de lojas, de centros de energia e de agentes de cobrança."
          }
        />
      </Box>
      <Box sx={{ pb: "80px" }}>
        <CommercializationProvider>
          <CommercializationView />
        </CommercializationProvider>
      </Box>
    </>
  );
};
