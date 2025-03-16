import dynamic from "next/dynamic";

const GestaoDaSegurancaNoTrabalhoPage = dynamic(
  () =>
    import(
      "@/modules/(sustentabilidade)/qualidade-ambiente-e-seguranca/gestao-da-seguranca-no-trabalho/page"
    ).then((mod) => mod.GestaoDaSegurancaNoTrabalhoPage),
  { ssr: false }
);

export default function GestaoDaSegurancaNoTrabalho() {
  return <GestaoDaSegurancaNoTrabalhoPage />;
}
