import dynamic from "next/dynamic";

const OsNossosClientesPage = dynamic(
  () =>
    import("@/modules/(clientes)/os-nossos-clientes/page").then(
      (mod) => mod.OsNossosClientesPage
    ),
  { ssr: false }
);

export default function OsNossosClientes() {
  return <OsNossosClientesPage />;
}
