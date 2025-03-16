import dynamic from "next/dynamic";

const CalculoDoValorDeCaucoesPage = dynamic(
  () =>
    import(
      "@/modules/(clientes)/contratacao/calculo-do-valor-de-caucoes/page"
    ).then((mod) => mod.CalculoDoValorDeCaucoesPage),
  { ssr: false }
);

export default function CalculoDoValorDeCaucoes() {
  return <CalculoDoValorDeCaucoesPage />;
}
