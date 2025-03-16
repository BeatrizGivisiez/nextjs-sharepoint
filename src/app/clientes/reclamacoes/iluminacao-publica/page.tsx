import dynamic from "next/dynamic";

const IluminacaoPublicaPage = dynamic(
  () =>
    import("@/modules/(clientes)/reclamacoes/iluminacao-publica").then(
      (mod) => mod.IluminacaoPublicaPage
    ),
  { ssr: false }
);

export default function IluminacaoPublica() {
  return <IluminacaoPublicaPage />;
}
