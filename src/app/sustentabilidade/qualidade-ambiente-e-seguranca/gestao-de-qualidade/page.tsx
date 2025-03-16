import dynamic from "next/dynamic";

const GestaoDeQualidadePage = dynamic(
  () =>
    import(
      "@/modules/(sustentabilidade)/qualidade-ambiente-e-seguranca/gestao-de-qualidade/page"
    ).then((mod) => mod.GestaoDeQualidadePage),
  { ssr: false }
);

export default function GestaoDeQualidade() {
  return <GestaoDeQualidadePage />;
}
