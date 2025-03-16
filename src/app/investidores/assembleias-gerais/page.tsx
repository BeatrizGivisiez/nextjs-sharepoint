import dynamic from "next/dynamic";

const AssembleiasGeraisPage = dynamic(
  () =>
    import("@/modules/(investidores)/assembleias-gerais/page").then(
      (mod) => mod.AssembleiasGeraisPage
    ),
  { ssr: false }
);

export default function AssembleiasGerais() {
  return <AssembleiasGeraisPage />;
}
