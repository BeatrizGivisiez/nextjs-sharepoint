import dynamic from "next/dynamic";

const TransicaoEnergeticaPage = dynamic(
  () =>
    import("@/modules/(sustentabilidade)/transicao-energetica/page").then(
      (mod) => mod.TransicaoEnergeticaPage
    ),
  { ssr: false }
);

export default function TransicaoEnergetica() {
  return <TransicaoEnergeticaPage />;
}
