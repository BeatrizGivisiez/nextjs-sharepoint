import dynamic from "next/dynamic";

const PedidoDeSubscricaoDeAlertasDeInterrupcoesDeEnergiaPage = dynamic(
  () =>
    import(
      "@/modules/(clientes)/pedido-de-subscricao-de-alertas-de-interrupcao-de-energia"
    ).then((mod) => mod.PedidoDeSubscricaoDeAlertasDeInterrupcoesDeEnergiaPage),
  { ssr: false }
);

export default function PedidoDeSubscricaoDeAlertasDeInterrupcoesDeEnergia() {
  return <PedidoDeSubscricaoDeAlertasDeInterrupcoesDeEnergiaPage />;
}
