import dynamic from "next/dynamic";

const TermoacumuladoresPage = dynamic(
  () =>
    import(
      "@/modules/(clientes)/produtos-e-servicos/termoacumuladores/page"
    ).then((mod) => mod.TermoacumuladoresPage),
  { ssr: false }
);

export default function Termoacumuladores() {
  return <TermoacumuladoresPage />;
}
