import dynamic from "next/dynamic";

const ConhecaAEDAOnlinePage = dynamic(
  () =>
    import("@/modules/(eda)/conheca-a-edaonline/page").then(
      (mod) => mod.ConhecaAEDAOnlinePage
    ),
  { ssr: false }
);

export default function ConhecaAEDAOnline() {
  return <ConhecaAEDAOnlinePage />;
}
