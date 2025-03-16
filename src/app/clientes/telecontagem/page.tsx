import dynamic from "next/dynamic";

const TelecontagemPage = dynamic(
  () =>
    import("@/modules/(clientes)/telecontagem/page").then(
      (mod) => mod.TelecontagemPage
    ),
  { ssr: false }
);

export default function NecessidadesEspeciais() {
  return <TelecontagemPage />;
}
