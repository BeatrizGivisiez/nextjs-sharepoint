import dynamic from "next/dynamic";

const TemasMateriaisPage = dynamic(
  () =>
    import("@/modules/(sustentabilidade)/temas-materiais/page").then(
      (mod) => mod.TemasMateriaisPage
    ),
  { ssr: false }
);

export default function TemasMateriais() {
  return <TemasMateriaisPage />;
}
