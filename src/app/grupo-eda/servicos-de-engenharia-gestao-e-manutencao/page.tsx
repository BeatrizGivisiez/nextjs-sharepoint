import dynamic from "next/dynamic";

const ServicosDeEngenhariaGestaoEManutencaoPage = dynamic(
  () =>
    import(
      "@/modules/grupo-eda/servicos-de-engenharia-gestao-e-manutencao/page"
    ).then((mod) => mod.ServicosDeEngenhariaGestaoEManutencaoPage),
  { ssr: false }
);

export default function ServicosDeEngenhariaGestaoEManutencao() {
  return <ServicosDeEngenhariaGestaoEManutencaoPage />;
}
