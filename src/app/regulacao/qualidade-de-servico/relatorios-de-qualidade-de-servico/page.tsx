import dynamic from "next/dynamic";

const RelatoriosDeQualidadeDeServicoPage = dynamic(
  () =>
    import(
      "@/modules/(regulacao)/qualidade-de-servico/relatorios-de-qualidade-de-servico/page"
    ).then((mod) => mod.RelatoriosDeQualidadeDeServicoPage),
  { ssr: false }
);

export default function RelatoriosDeQualidadeDeServico() {
  return <RelatoriosDeQualidadeDeServicoPage />;
}
