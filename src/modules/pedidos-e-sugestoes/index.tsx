"use client";

import { Breadcrumbs, TitleDescription } from "@/components";
import { FormPedidosESugestoes } from "@/components/Form/FormPedidosESugestoes";
import { Box } from "@mui/material";

export const PedidosESugestoesPage = () => {
  return (
    <>
      <Breadcrumbs category={"Pedidos e Sugestões"} />
      <Box sx={{ py: "80px" }}>
        <TitleDescription
          title={"Pedidos e Sugestões"}
          description={
            "Se necessitar de uma informação, ou tiver uma sugestão, preencha o formulário abaixo e entraremos em contacto consigo."
          }
        />
      </Box>

      <Box sx={{ pb: "80px" }}>
        <FormPedidosESugestoes />
      </Box>
    </>
  );
};
