import dynamic from "next/dynamic";

const PrevencaoDaCorrupcaoPage = dynamic(
  () =>
    import("@/modules/prevencao-da-corrupcao/page").then(
      (mod) => mod.PrevencaoDaCorrupcaoPage
    ),
  { ssr: false }
);

export default function PrevencaoDaCorrupcao() {
  return <PrevencaoDaCorrupcaoPage />;
}
