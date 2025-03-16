import dynamic from "next/dynamic";

const AuditoriaAQualidadeDeServicoPage = dynamic(
  () =>
    import(
      "@/modules/(regulacao)/qualidade-de-servico/auditoria-a-qualidade-de-servico/page"
    ).then((mod) => mod.AuditoriaAQualidadeDeServicoPage),
  { ssr: false }
);

export default function AuditoriaAQualidadeDeServico() {
  return <AuditoriaAQualidadeDeServicoPage />;
}
