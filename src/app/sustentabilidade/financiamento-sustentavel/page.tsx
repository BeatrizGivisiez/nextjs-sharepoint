import dynamic from "next/dynamic";

const FinanciamentoSustentavelPage = dynamic(
  () =>
    import("@/modules/(sustentabilidade)/financiamento-sustentavel/page").then(
      (mod) => mod.FinanciamentoSustentavelPage
    ),
  { ssr: false }
);

export default function FinanciamentoSustentavel() {
  return <FinanciamentoSustentavelPage />;
}
