import dynamic from "next/dynamic";

const ApoioAoClientePage = dynamic(
  () =>
    import("@/modules/apoio-ao-cliente/page").then(
      (mod) => mod.ApoioAoClientePage
    ),
  { ssr: false }
);

export default function ApoioAoCliente() {
  return <ApoioAoClientePage />;
}
