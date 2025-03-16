import dynamic from "next/dynamic";

const AcionistasPage = dynamic(
  () =>
    import("@/modules/(investidores)/acionistas/page").then(
      (mod) => mod.AcionistasPage
    ),
  { ssr: false }
);

export default function Acionistas() {
  return <AcionistasPage />;
}
