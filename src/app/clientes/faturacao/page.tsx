import dynamic from "next/dynamic";

const FaturacaoPage = dynamic(
  () =>
    import("@/modules/(clientes)/faturacao/page").then(
      (mod) => mod.FaturacaoPage
    ),
  { ssr: false }
);

export default function Faturacao() {
  return <FaturacaoPage />;
}
