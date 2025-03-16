import { Bug, Scales, Tree } from "@phosphor-icons/react";

export const TITLE: string = "Explore outros temas";

export const CARDICONDESCRIPTION: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: Bug,
    title: "Estratégia da Sustentabilidade",
    description: "",
    href: "/sustentabilidade/estrategia-da-sustentabilidade",
  },
  {
    icon: Scales,
    title: "Financiamento Sustentável",
    description: "",
    href: "/sustentabilidade/financiamento-sustentavel",
  },
  {
    icon: Tree,
    title: "Gestão Ambiental",
    description: "",
    href: "/sustentabilidade/qualidade-ambiente-e-seguranca/gestao-ambiental",
  },
];
