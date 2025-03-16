
import { Breadcrumbs, TitleDescription } from "@/components";
import { FormOutrasReclamacoes } from "@/components/Form/FormOutrasReclamacoes";
import { Box } from "@mui/material";

export const OutrasReclamacoesPage = () => {
  return (
    <>
      <Breadcrumbs category={"Reclamações"} URLcategory="/clientes/reclamacoes" mainPage="Outras Reclamações" />
      <Box sx={{ py: "80px" }}>
        <TitleDescription
          title={"Outras Reclamações"}
          description={
            "Se ocorrerem danos em equipamentos elétricos resultantes de anomalias ou incidentes na rede elétrica e pretende apresentar uma reclamação, preencha e envie o formulário abaixo."
          }
        />
      </Box>

      <Box sx={{ pb: "80px" }}>
        <FormOutrasReclamacoes />
      </Box>
    </>
  );
};
