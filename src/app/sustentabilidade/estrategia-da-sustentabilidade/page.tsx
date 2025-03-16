import dynamic from "next/dynamic";

const EstrategiaDaSustentabilidadePage = dynamic(
  () =>
    import(
      "@/modules/(sustentabilidade)/estrategia-da-sustentabilidade/page"
    ).then((mod) => mod.EstrategiaDaSustentabilidadePage),
  { ssr: false }
);

export default function EstrategiaDaSustentabilidade() {
  return <EstrategiaDaSustentabilidadePage />;
}
