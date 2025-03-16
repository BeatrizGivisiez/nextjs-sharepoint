import dynamic from "next/dynamic";

const RegulamentoDeRelacoesComerciaisPage = dynamic(
  () =>
    import(
      "@/modules/(regulacao)/regulamentos/regulamento-de-relacoes-comerciais/page"
    ).then((mod) => mod.RegulamentoDeRelacoesComerciaisPage),
  { ssr: false }
);

export default function RegulamentoDeRelacoesComerciais() {
  return <RegulamentoDeRelacoesComerciaisPage />;
}
