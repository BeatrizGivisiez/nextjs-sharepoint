import dynamic from "next/dynamic";

const CompromissoSocialPage = dynamic(
  () =>
    import("@/modules/(sustentabilidade)/compromisso-social/page").then(
      (mod) => mod.CompromissoSocialPage
    ),
  { ssr: false }
);

export default function CompromissoSocial() {
  return <CompromissoSocialPage />;
}
