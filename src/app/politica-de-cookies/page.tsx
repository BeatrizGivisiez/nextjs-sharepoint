import dynamic from "next/dynamic";

const PoliticaDeCookiesPage = dynamic(
  () =>
    import("@/modules/politica-de-cookies/page").then(
      (mod) => mod.PoliticaDeCookiesPage
    ),
  { ssr: false }
);

export default function PoliticaDeCookies() {
  return <PoliticaDeCookiesPage />;
}
