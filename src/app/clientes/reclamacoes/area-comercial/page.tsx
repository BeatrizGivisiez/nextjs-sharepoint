import dynamic from "next/dynamic";

const ReclamacoesAreaComercialPage = dynamic(
  () =>
    import("@/modules/(clientes)/reclamacoes/area-comercial").then(
      (mod) => mod.ReclamacoesAreaComercialPage
    ),
  { ssr: false }
);

export default function ReclamacoesAreaComercial() {
  return <ReclamacoesAreaComercialPage />;
}
