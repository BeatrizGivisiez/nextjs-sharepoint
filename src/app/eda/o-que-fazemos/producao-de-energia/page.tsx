import dynamic from "next/dynamic";

const ProducaoDeEnergiaPage = dynamic(
  () =>
    import("@/modules/(eda)/o-que-fazemos/producao-de-energia/page").then(
      (mod) => mod.ProducaoDeEnergiaPage
    ),
  { ssr: false }
);

export default function ProducaoDeEnergia() {
  return <ProducaoDeEnergiaPage />;
}
