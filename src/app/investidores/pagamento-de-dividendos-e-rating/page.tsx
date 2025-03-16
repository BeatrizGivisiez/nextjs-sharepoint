import dynamic from "next/dynamic";

const PagamentoDeDividendosERatingPage = dynamic(
  () =>
    import(
      "@/modules/(investidores)/pagamento-de-dividendos-e-rating/page"
    ).then((mod) => mod.PagamentoDeDividendosERatingPage),
  { ssr: false }
);

export default function PagamentoDeDividendosERating() {
  return <PagamentoDeDividendosERatingPage />;
}
