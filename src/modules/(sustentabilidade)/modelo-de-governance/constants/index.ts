import { Bug, GlobeHemisphereEast, Scales } from "@phosphor-icons/react";

export const TITLE: string = "Explore outros temas";

export const CARDICONDESCRIPTION: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: GlobeHemisphereEast,
    title: "Temas Materiais",
    description: "",
    href: "/sustentabilidade/temas-materiais",
  },
  {
    icon: Scales,
    title: "Financiamento Sustentável",
    description: "",
    href: "/sustentabilidade/financiamento-sustentavel",
  },
  {
    icon: Bug,
    title: "Estratégia da Sustentabilidade",
    description: "",
    href: "/sustentabilidade/estrategia-da-sustentabilidade",
  },
];
