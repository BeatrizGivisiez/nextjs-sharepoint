import dynamic from "next/dynamic";

const NecessidadesEspeciaisPage = dynamic(
  () =>
    import("@/modules/(clientes)/necessidades-especiais-e-prioritarios/page").then(
      (mod) => mod.NecessidadesEspeciaisPage
    ),
  { ssr: false }
);

export default function NecessidadesEspeciais() {
  return <NecessidadesEspeciaisPage />;
}
