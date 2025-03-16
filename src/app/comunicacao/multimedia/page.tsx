import dynamic from "next/dynamic";

const MultimediaPage = dynamic(
  () =>
    import("@/modules/(comunicacao)/multimedia/page").then(
      (mod) => mod.MultimediaPage
    ),
  { ssr: false }
);

export default function Multimedia() {
  return <MultimediaPage />;
}
