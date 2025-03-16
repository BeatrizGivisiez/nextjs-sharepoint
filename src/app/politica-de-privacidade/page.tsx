import dynamic from "next/dynamic";

const PoliticaDePrivacidadePage = dynamic(
  () =>
    import("@/modules/politica-de-privacidade/page").then(
      (mod) => mod.PoliticaDePrivacidadePage
    ),
  { ssr: false }
);

export default function PoliticaDePrivacidade() {
  return <PoliticaDePrivacidadePage />;
}
