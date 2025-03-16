import dynamic from "next/dynamic";

const ContasReguladasPage = dynamic(
  () =>
    import("@/modules/(regulacao)/contas-reguladas/page").then(
      (mod) => mod.ContasReguladasPage
    ),
  { ssr: false }
);

export default function ContasReguladas() {
  return <ContasReguladasPage />;
}
