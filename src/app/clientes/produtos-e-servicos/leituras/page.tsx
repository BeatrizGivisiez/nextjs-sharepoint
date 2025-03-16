import dynamic from "next/dynamic";

const LeiturasPage = dynamic(
  () =>
    import("@/modules/(clientes)/produtos-e-servicos/leituras/page").then(
      (mod) => mod.LeiturasPage
    ),
  { ssr: false }
);

export default function Leituras() {
  return <LeiturasPage />;
}
