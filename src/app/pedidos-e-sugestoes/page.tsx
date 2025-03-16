import dynamic from "next/dynamic";

const PedidosESugestoesPage = dynamic(
  () =>
    import("@/modules/pedidos-e-sugestoes").then(
      (mod) => mod.PedidosESugestoesPage
    ),
  { ssr: false }
);

export default function PedidosESugestoes() {
  return <PedidosESugestoesPage />;
}
