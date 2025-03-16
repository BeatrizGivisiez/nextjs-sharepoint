import dynamic from "next/dynamic";

const OQueFazemosPage = dynamic(
  () =>
    import("@/modules/(eda)/o-que-fazemos/page").then(
      (mod) => mod.OQueFazemosPage
    ),
  { ssr: false }
);

export default function OQueFazemos() {
  return <OQueFazemosPage />;
}
