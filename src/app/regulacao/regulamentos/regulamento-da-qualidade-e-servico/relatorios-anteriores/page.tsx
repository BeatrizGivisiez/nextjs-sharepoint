import dynamic from "next/dynamic";

const RelatoriosAnterioresPage = dynamic(
  () =>
    import(
      "@/modules/(regulacao)/regulamentos/regulamento-da-qualidade-de-servico/relatorios-anteriores/page"
    ).then((mod) => mod.RelatoriosAnterioresPage),
  { ssr: false }
);

export default function RelatoriosAnteriores() {
  return <RelatoriosAnterioresPage />;
}
