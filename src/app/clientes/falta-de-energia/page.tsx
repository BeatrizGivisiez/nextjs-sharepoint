import dynamic from "next/dynamic";

const FaltaDeEnergiaPage = dynamic(
  () =>
    import("@/modules/(clientes)/falta-de-energia/page").then(
      (mod) => mod.FaltaDeEnergiaPage
    ),
  { ssr: false }
);

export default function FaltaDeEnergia() {
  return <FaltaDeEnergiaPage />;
}
