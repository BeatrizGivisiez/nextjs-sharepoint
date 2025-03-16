import dynamic from "next/dynamic";

const EspecificacoesTecnicasPage = dynamic(
  () =>
    import("@/modules/(profissionais)/especificacoes-tecnicas/page").then(
      (mod) => mod.EspecificacoesTecnicasPage
    ),
  { ssr: false }
);

export default function EspecificacoesTecnicas() {
  return <EspecificacoesTecnicasPage />;
}
