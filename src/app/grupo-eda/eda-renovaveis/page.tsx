import dynamic from "next/dynamic";

const EDARenovaveisPage = dynamic(
  () =>
    import("@/modules/grupo-eda/eda-renovaveis/page").then(
      (mod) => mod.EDARenovaveisPage
    ),
  { ssr: false }
);

export default function EDARenovaveis() {
  return <EDARenovaveisPage />;
}
