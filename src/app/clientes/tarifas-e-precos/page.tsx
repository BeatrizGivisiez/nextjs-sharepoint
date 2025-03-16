import dynamic from "next/dynamic";

const TarifasEPrecosPage = dynamic(
  () => import("@/modules/(clientes)/tarifas-e-precos/page"),
  { ssr: false }
);

export default function TarifasEPrecos() {
  return <TarifasEPrecosPage />;
}
