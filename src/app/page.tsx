import dynamic from "next/dynamic";

const HomePage = dynamic(
  () => import("@/modules/home/page").then((mod) => mod.HomePage),
  { ssr: false }
);

export default function Home() {
  return <HomePage />;
}
