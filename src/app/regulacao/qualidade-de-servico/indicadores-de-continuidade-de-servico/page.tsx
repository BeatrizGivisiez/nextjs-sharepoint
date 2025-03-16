import dynamic from "next/dynamic";

const IndicadoresDeContinuidadeDeServicoPage = dynamic(
  () =>
    import(
      "@/modules/(regulacao)/qualidade-de-servico/indicadores-de-continuidade-de-servico/page"
    ).then((mod) => mod.IndicadoresDeContinuidadeDeServicoPage),
  { ssr: false }
);

export default function IndicadoresDeQualidadeDeServico() {
  return <IndicadoresDeContinuidadeDeServicoPage />;
}
