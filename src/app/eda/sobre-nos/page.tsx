import dynamic from "next/dynamic";

const SobreNosPage = dynamic(
  () =>
    import("@/modules/(eda)/sobre-nos/page").then((mod) => mod.SobreNosPage),
  { ssr: false }
);

export default function SobreNos() {
  return <SobreNosPage />;
}
