import { Bug, Medal, Clover } from "@phosphor-icons/react";

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
    icon: Medal,
    title: "Qualidade, Ambiente e Segurança",
    description: "",
    href: "/sustentabilidade/qualidade-ambiente-e-seguranca",
  },
  {
    icon: Clover,
    title: "Publicações de Sustentabilidade",
    description: "",
    href: "/sustentabilidade/publicacoes",
  },
];
