import dynamic from "next/dynamic";

const OrganizacaoPage = dynamic(
  () =>
    import("@/modules/(eda)/organizacao/page").then(
      (mod) => mod.OrganizacaoPage
    ),
  { ssr: false }
);

export default function Organizacao() {
  return <OrganizacaoPage />;
}
