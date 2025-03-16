import dynamic from "next/dynamic";

const ProvedorDoClientePage = dynamic(
  () =>
    import("@/modules/provedor-do-cliente/page").then(
      (mod) => mod.ProvedorDoClientePage
    ),
  { ssr: false }
);

export default function ProvedorDoCliente() {
  return <ProvedorDoClientePage />;
}
