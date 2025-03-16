import dynamic from "next/dynamic";

const NoticiasPage = dynamic(
  () =>
    import("@/modules/(comunicacao)/noticias/page").then(
      (mod) => mod.NoticiasPage
    ),
  { ssr: false }
);

export default function Noticias() {
  return <NoticiasPage />;
}
