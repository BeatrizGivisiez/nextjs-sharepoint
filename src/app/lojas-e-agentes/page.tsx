import dynamic from "next/dynamic";

const LojasEAgentesPage = dynamic(
  () =>
    import("@/modules/lojas-e-agentes/page").then(
      (mod) => mod.LojasEAgentesPage
    ),
  { ssr: false }
);

export default function LojasEAgentes() {
  return <LojasEAgentesPage />;
}
