import dynamic from "next/dynamic";

const IndicadoresDeQualidadeDaOndaDeTensaoPage = dynamic(
  () =>
    import(
      "@/modules/(regulacao)/qualidade-de-servico/indicadores-de-qualidade-da-onda-de-tensao/page"
    ).then((mod) => mod.IndicadoresDeQualidadeDaOndaDeTensaoPage),
  { ssr: false }
);

export default function IndicadoresDeQualidadeDaOndaDeTensao() {
  return <IndicadoresDeQualidadeDaOndaDeTensaoPage />;
}
