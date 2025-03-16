import dynamic from "next/dynamic";

const PedidoDeSubscricaoDeAlertasDeInterrupcoesDeEnergiaPage = dynamic(
  () =>
    import(
      "@/modules/(clientes)/interrupcoes-de-energia/pedido-de-subscricao-de-alertas-de-interrupcoes-de-energia"
    ).then((mod) => mod.PedidoDeSubscricaoDeAlertasDeInterrupcoesDeEnergiaPage),
  { ssr: false }
);

export default function PedidoDeSubscricaoDeAlertasDeInterrupcoesDeEnergia() {
  return <PedidoDeSubscricaoDeAlertasDeInterrupcoesDeEnergiaPage />;
}
