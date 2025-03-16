import dynamic from "next/dynamic";

const ProjetosPage = dynamic(
  () =>
    import("@/modules/(comunicacao)/projetos/page").then(
      (mod) => mod.ProjetosPage
    ),
  { ssr: false }
);

export default function Projetos() {
  return <ProjetosPage />;
}
