import dynamic from "next/dynamic";

const ConfirmacaoEmailPage = dynamic(
  () =>
    import("@/modules/confirmacao-email").then(
      (mod) => mod.ConfirmacaoEmailPage
    ),
  { ssr: false }
);

export default function ConfirmacaoEmail() {
  return <ConfirmacaoEmailPage />;
}
