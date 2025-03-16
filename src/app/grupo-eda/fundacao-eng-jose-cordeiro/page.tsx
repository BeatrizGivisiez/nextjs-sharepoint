import dynamic from "next/dynamic";

const FundacaoEngJoseCordeiroPage = dynamic(
  () =>
    import("@/modules/grupo-eda/fundacao-eng-jose-cordeiro/page").then(
      (mod) => mod.FundacaoEngJoseCordeiroPage
    ),
  { ssr: false }
);

export default function FundacaoEngJoseCordeiro() {
  return <FundacaoEngJoseCordeiroPage />;
}
