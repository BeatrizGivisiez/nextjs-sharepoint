"use client";

import { Breadcrumbs, TitleDescription } from "@/components";
import { FormVisitasDeEstudo } from "@/components/Form/FormVisitasDeEstudo";
import { Box } from "@mui/material";

export const VisitasDeEstudoPage = () => {
  return (
    <>
      <Breadcrumbs category={"Visitas de Estudo"} />
      <Box sx={{ py: "80px" }}>
        <TitleDescription
          title={"Visitas de Estudo"}
          description={
            "Para agendar uma visita de estudo às nossas instalações, preencha o formulário abaixo indicando o local, dia e horário pretendidos e entraremos em contacto consigo."
          }
        />
      </Box>

      <Box sx={{ pb: "80px" }}>
        <FormVisitasDeEstudo />
      </Box>
    </>
  );
};
