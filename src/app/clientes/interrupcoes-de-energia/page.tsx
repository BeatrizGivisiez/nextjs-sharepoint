import dynamic from "next/dynamic";

const InterrupcoesDeEnergiaPage = dynamic(
  () =>
    import("@/modules/(clientes)/interrupcoes-de-energia/page").then(
      (mod) => mod.InterrupcoesDeEnergiaPage
    ),
  { ssr: false }
);

export default function InterrupcoesDeEnergia() {
  return <InterrupcoesDeEnergiaPage />;
}
