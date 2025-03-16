import dynamic from "next/dynamic";

const GestaoAmbientalPage = dynamic(
  () =>
    import(
      "@/modules/(sustentabilidade)/qualidade-ambiente-e-seguranca/gestao-ambiental/page"
    ).then((mod) => mod.GestaoAmbientalPage),
  { ssr: false }
);

export default function GestaoAmbiental() {
  return <GestaoAmbientalPage />;
}
