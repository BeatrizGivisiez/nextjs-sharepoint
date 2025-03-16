import dynamic from "next/dynamic";

const PublicacoesPage = dynamic(
  () =>
    import("@/modules/(sustentabilidade)/publicacoes/page").then(
      (mod) => mod.PublicacoesPage
    ),
  { ssr: false }
);

export default function Publicacoes() {
  return <PublicacoesPage />;
}
