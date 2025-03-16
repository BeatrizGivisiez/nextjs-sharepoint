import dynamic from "next/dynamic";

const PesquisaPage = dynamic(
  () => import("@/modules/pesquisa/page").then((mod) => mod.PesquisaPage),
  { ssr: false }
);

export default function Pesquisa() {
  return <PesquisaPage />;
}
