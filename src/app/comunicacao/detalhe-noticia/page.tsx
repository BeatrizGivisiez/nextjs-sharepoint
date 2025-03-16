import dynamic from "next/dynamic";

const DetalheNoticiaPage = dynamic(
  () =>
    import("@/modules/(comunicacao)/detalhe-noticia/page").then(
      (mod) => mod.DetalheNoticiaPage
    ),
  { ssr: false }
);

export default function DetalheNoticia() {
  return <DetalheNoticiaPage />;
}
