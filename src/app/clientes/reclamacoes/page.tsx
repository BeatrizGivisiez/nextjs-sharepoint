import dynamic from "next/dynamic";

const ReclamacoesPage = dynamic(
  () => import("@/modules/(clientes)/reclamacoes/page"),
  { ssr: false }
);

export default function Reclamacoes() {
  return <ReclamacoesPage />;
}
