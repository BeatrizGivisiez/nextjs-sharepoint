import dynamic from "next/dynamic";

const EDAElectricidadeDosAcoresPage = dynamic(
  () =>
    import(
      "@/modules/(comunicacao)/projetos/eda-electricidade-dos-acores/page"
    ).then((mod) => mod.EDAElectricidadeDosAcoresPage),
  { ssr: false }
);

export default function EDAElectricidadeDosAcores() {
  return <EDAElectricidadeDosAcoresPage />;
}
