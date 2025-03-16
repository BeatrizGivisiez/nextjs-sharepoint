import dynamic from "next/dynamic";

const BateriasIlhaTerceiraPage = dynamic(
  () =>
    import("@/modules/(comunicacao)/projetos/baterias-ilha-terceira/page").then(
      (mod) => mod.BateriasIlhaTerceiraPage
    ),
  { ssr: false }
);

export default function BateriasIlhaTerceira() {
  return <BateriasIlhaTerceiraPage />;
}
