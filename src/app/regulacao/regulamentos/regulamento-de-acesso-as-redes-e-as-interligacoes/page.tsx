import dynamic from "next/dynamic";

const RegulamentoDeAcessoAsRedesEInterligacoesPage = dynamic(
  () =>
    import(
      "@/modules/(regulacao)/regulamentos/regulamento-de-acesso-as-redes-e-interligacoes/page"
    ).then((mod) => mod.RegulamentoDeAcessoAsRedesEInterligacoesPage),
  { ssr: false }
);

export default function RegulamentosDeAcessoAsRedesEInterligacoes() {
  return <RegulamentoDeAcessoAsRedesEInterligacoesPage />;
}
