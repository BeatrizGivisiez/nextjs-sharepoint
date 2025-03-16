import dynamic from "next/dynamic";

const RotulagemEnergeticaPage = dynamic(
  () =>
    import("@/modules/(sustentabilidade)/rotulagem-energetica/page").then(
      (mod) => mod.RotulagemEnergeticaPage
    ),
  { ssr: false }
);

export default function RotulagemEnergetica() {
  return <RotulagemEnergeticaPage />;
}
