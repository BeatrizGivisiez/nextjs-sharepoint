import dynamic from "next/dynamic";

const EconomiaCircularPage = dynamic(
  () =>
    import("@/modules/(sustentabilidade)/economia-circular/page").then(
      (mod) => mod.EconomiaCircularPage
    ),
  { ssr: false }
);

export default function EconomiaCircular() {
  return <EconomiaCircularPage />;
}
