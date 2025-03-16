import dynamic from "next/dynamic";

const RegulamentoDaQualidadeDeServicoPage = dynamic(
  () =>
    import(
      "@/modules/(regulacao)/regulamentos/regulamento-da-qualidade-de-servico/page"
    ).then((mod) => mod.RegulamentoDaQualidadeDeServicoPage),
  { ssr: false }
);

export default function RegulamentoDeQualidadeDeServico() {
  return <RegulamentoDaQualidadeDeServicoPage />;
}
