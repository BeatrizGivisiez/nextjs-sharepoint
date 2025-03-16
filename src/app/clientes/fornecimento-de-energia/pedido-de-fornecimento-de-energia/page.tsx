import dynamic from "next/dynamic";

const PedidoDeFornecimentoDeEnergiaPage = dynamic(
  () =>
    import("@/modules/(clientes)/fornecimento-de-energia/pedido-de-fornecimento-de-energia").then(
      (mod) => mod.PedidoDeFornecimentoDeEnergiaPage
    ),
  { ssr: false }
);

export default function PedidoDeFornecimentoDeEnergia() {
  return <PedidoDeFornecimentoDeEnergiaPage />;
}
