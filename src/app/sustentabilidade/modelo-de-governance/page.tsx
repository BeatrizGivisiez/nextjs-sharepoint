import dynamic from "next/dynamic";

const ModeloDeGovernancePage = dynamic(
  () =>
    import("@/modules/(sustentabilidade)/modelo-de-governance/page").then(
      (mod) => mod.ModeloDeGovernancePage
    ),
  { ssr: false }
);

export default function ModeloDeGovernance() {
  return <ModeloDeGovernancePage />;
}
