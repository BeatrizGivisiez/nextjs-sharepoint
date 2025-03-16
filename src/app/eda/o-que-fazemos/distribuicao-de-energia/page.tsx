import dynamic from "next/dynamic";

const DistribuicaoDeEnergiaPage = dynamic(
  () =>
    import("@/modules/(eda)/o-que-fazemos/distribuicao-de-energia/page").then(
      (mod) => mod.DistribuicaoDeEnergiaPage
    ),
  { ssr: false }
);

export default function DistribuicaoDeEnergia() {
  return <DistribuicaoDeEnergiaPage />;
}
