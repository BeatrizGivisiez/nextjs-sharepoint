import dynamic from "next/dynamic";

const ManuaisInformacoesEGuiasTecnicosPage = dynamic(
  () =>
    import(
      "@/modules/(profissionais)/manuais-informacoes-e-guias-tecnicos/page"
    ).then((mod) => mod.ManuaisInformacoesEGuiasTecnicosPage),
  { ssr: false }
);

export default function ManuaisInformacoesEGuiasTecnicos() {
  return <ManuaisInformacoesEGuiasTecnicosPage />;
}
