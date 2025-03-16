import dynamic from "next/dynamic";

const EventosExcepcionaisPage = dynamic(
  () =>
    import(
      "@/modules/(regulacao)/qualidade-de-servico/eventos-excecionais/page"
    ).then((mod) => mod.EventosExcepcionaisPage),
  { ssr: false }
);

export default function EventosExcepcionais() {
  return <EventosExcepcionaisPage />;
}
