import dynamic from "next/dynamic";

const PublicacaoPage = dynamic(
  () => import("@/modules/(comunicacao)/publicacoes/page"),
  { ssr: false }
);

export default function Publicacoes() {
  return <PublicacaoPage />;
}
