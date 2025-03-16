import dynamic from "next/dynamic";

const RegulamentosPage = dynamic(
  () =>
    import("@/modules/(regulacao)/regulamentos/page").then(
      (mod) => mod.RegulamentosPage
    ),
  { ssr: false }
);

export default function Regulamentos() {
  return <RegulamentosPage />;
}
