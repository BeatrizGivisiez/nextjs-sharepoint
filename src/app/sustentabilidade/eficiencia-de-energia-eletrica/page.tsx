import dynamic from "next/dynamic";

const EficienciaDeEnergiaEletricaPage = dynamic(
  () =>
    import(
      "@/modules/(sustentabilidade)/eficiencia-de-energia-eletrica/page"
    ).then((mod) => mod.EficienciaDeEnergiaEletricaPage),
  { ssr: false }
);

export default function EficienciaDeEnergiaEletrica() {
  return <EficienciaDeEnergiaEletricaPage />;
}
