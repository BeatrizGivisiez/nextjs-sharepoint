import dynamic from "next/dynamic";

const ProdutosEServicosPage = dynamic(
  () => import("@/modules/(clientes)/produtos-e-servicos/page"),
  { ssr: false }
);

export default function ProdutosEServicos() {
  return <ProdutosEServicosPage />;
}
