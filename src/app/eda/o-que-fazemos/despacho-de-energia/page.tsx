import dynamic from "next/dynamic";

const DespachoDeEnergiaPage = dynamic(
  () =>
    import("@/modules/(eda)/o-que-fazemos/despacho-de-energia").then(
      (mod) => mod.DespachoDeEnergiaPage
    ),
  { ssr: false }
);

export default function DespachoDeEnergia() {
  return <DespachoDeEnergiaPage />;
}
