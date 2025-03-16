import dynamic from "next/dynamic";

const ComercializacaoDeEnergiaPage = dynamic(
  () =>
    import("@/modules/(eda)/o-que-fazemos/comercializacao-de-energia").then(
      (mod) => mod.ComercializacaoDeEnergiaPage
    ),
  { ssr: false }
);

export default function ComercializacaoDeEnergia() {
  return <ComercializacaoDeEnergiaPage />;
}
