import dynamic from "next/dynamic";

const ContratacaoPage = dynamic(
  () =>
    import("@/modules/(clientes)/contratacao/page").then(
      (mod) => mod.ContratacaoPage
    ),
  { ssr: false }
);

export default function Contratacao() {
  return <ContratacaoPage />;
}
