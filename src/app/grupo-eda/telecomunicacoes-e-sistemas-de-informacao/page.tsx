import dynamic from "next/dynamic";

const TelecomunicacoesESistemasDeInformacaoPage = dynamic(
  () =>
    import(
      "@/modules/grupo-eda/telecomunicacoes-e-sistemas-de-informacao/page"
    ).then((mod) => mod.TelecomunicacoesESistemasDeInformacaoPage),
  { ssr: false }
);

export default function TelecomunicacoesESistemasDeInformacao() {
  return <TelecomunicacoesESistemasDeInformacaoPage />;
}
