import dynamic from "next/dynamic";

const QualidadeDeServicoPage = dynamic(
  () =>
    import("@/modules/(regulacao)/qualidade-de-servico/page").then(
      (mod) => mod.QualidadeDeServicoPage
    ),
  { ssr: false }
);

export default function QualidadeDeServico() {
  return <QualidadeDeServicoPage />;
}
