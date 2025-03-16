import dynamic from "next/dynamic";

const CallCenterPage = dynamic(
  () =>
    import("@/modules/(clientes)/produtos-e-servicos/call-center/page").then(
      (mod) => mod.CallCenterPage
    ),
  { ssr: false }
);

export default function CallCenter() {
  return <CallCenterPage />;
}
