import dynamic from "next/dynamic";

const PlanosDeMonitorizacaoPage = dynamic(
  () =>
    import(
      "@/modules/(regulacao)/qualidade-de-servico/planos-de-monitorizacao/page"
    ).then((mod) => mod.PlanosDeMonitorizacaoPage),
  { ssr: false }
);

export default function PlanosDeMonitorizacao() {
  return <PlanosDeMonitorizacaoPage />;
}
