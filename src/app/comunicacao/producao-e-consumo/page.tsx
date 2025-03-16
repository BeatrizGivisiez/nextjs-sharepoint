import dynamic from "next/dynamic";

const ProducaoEConsumoPage = dynamic(
  () =>
    import("@/modules/(comunicacao)/producao-e-consumo/page").then(
      (mod) => mod.ProducaoEConsumoPage
    ),
  { ssr: false }
);

export default function ProducaoEConsumo() {
  return <ProducaoEConsumoPage />;
}
