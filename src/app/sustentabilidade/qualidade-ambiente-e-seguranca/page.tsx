import dynamic from "next/dynamic";

const QualidadeAmbienteESegurancaPage = dynamic(
  () =>
    import(
      "@/modules/(sustentabilidade)/qualidade-ambiente-e-seguranca/page"
    ).then((mod) => mod.QualidadeAmbienteESegurancaPage),
  { ssr: false }
);

export default function QualidadeAmbienteESeguranca() {
  return <QualidadeAmbienteESegurancaPage />;
}
