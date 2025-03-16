import dynamic from "next/dynamic";

const GrupoEDAPage = dynamic(() => import("@/modules/grupo-eda/page"), {
  ssr: false,
});

export default function GrupoEDA() {
  return <GrupoEDAPage />;
}
