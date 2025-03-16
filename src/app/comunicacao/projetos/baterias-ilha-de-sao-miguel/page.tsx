import dynamic from "next/dynamic";

const BateriasIlhaDeSaoMiguelPage = dynamic(
  () =>
    import(
      "@/modules/(comunicacao)/projetos/baterias-ilha-de-sao-miguel/pages"
    ).then((mod) => mod.BateriasIlhaDeSaoMiguelPage),
  { ssr: false }
);

export default function BateriasIlhaDeSaoMiguel() {
  return <BateriasIlhaDeSaoMiguelPage />;
}
