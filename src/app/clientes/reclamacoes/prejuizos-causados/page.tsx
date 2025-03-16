import dynamic from "next/dynamic";

const PrejuizosCausadosPage = dynamic(
  () =>
    import("@/modules/(clientes)/reclamacoes/prejuizos-causados").then(
      (mod) => mod.PrejuizosCausadosPage
    ),
  { ssr: false }
);

export default function PrejuizosCausados() {
  return <PrejuizosCausadosPage />;
}
