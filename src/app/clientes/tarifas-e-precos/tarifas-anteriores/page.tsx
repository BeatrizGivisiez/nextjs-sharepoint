import dynamic from "next/dynamic";

const TarifasAnterioresPage = dynamic(
  () => import("@/modules/(clientes)/tarifas-e-precos/tarifas-anteriores/page"),
  { ssr: false }
);

export default function TarifasAnteriores() {
  return <TarifasAnterioresPage />;
}
