import dynamic from "next/dynamic";

const VisitasDeEstudoPage = dynamic(
  () =>
    import("@/modules/visitas-de-estudo").then(
      (mod) => mod.VisitasDeEstudoPage
    ),
  { ssr: false }
);

export default function VisitasDeEstudo() {
  return <VisitasDeEstudoPage />;
}
