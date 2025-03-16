import dynamic from "next/dynamic";

const DebitoDiretoPage = dynamic(
  () =>
    import("@/modules/(clientes)/produtos-e-servicos/debito-direto/page").then(
      (mod) => mod.DebitoDiretoPage
    ),
  { ssr: false }
);

export default function DebitoDireto() {
  return <DebitoDiretoPage />;
}
