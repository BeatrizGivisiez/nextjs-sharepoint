import dynamic from "next/dynamic";

const FornecimentoDeEnergiaPage = dynamic(
  () =>
    import("@/modules/(clientes)/fornecimento-de-energia/page").then(
      (mod) => mod.FornecimentoDeEnergiaPage
    ),
  { ssr: false }
);

export default function FornecimentoDeEnergia() {
  return <FornecimentoDeEnergiaPage />;
}
