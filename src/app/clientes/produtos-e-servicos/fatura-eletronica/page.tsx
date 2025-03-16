import dynamic from "next/dynamic";

const FaturaEletronicaPage = dynamic(
  () =>
    import(
      "@/modules/(clientes)/produtos-e-servicos/fatura-eletronica/page"
    ).then((mod) => mod.FaturaEletronicaPage),
  { ssr: false }
);

export default function FaturaEletronica() {
  return <FaturaEletronicaPage />;
}
