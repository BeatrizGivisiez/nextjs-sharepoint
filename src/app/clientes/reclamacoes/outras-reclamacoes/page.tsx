import dynamic from "next/dynamic";

const OutrasReclamacoesPage = dynamic(
  () =>
    import("@/modules/(clientes)/reclamacoes/outras-reclamacoes").then(
      (mod) => mod.OutrasReclamacoesPage
    ),
  { ssr: false }
);

export default function OutrasReclamacoes() {
  return <OutrasReclamacoesPage />;
}
