import { Bug, ChartDonut, Lightning, PhoneCall } from "@phosphor-icons/react";

export const CARDICONDESCRIPTION: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: Lightning,
    title: "O Que Fazemos",
    description: "",
    href: "/eda/o-que-fazemos",
  },
  {
    icon: Bug,
    title: "Estratégia da Sustentabilidade",
    description: "",
    href: "/sustentabilidade/estrategia-da-sustentabilidade",
  },
  {
    icon: ChartDonut,
    title: "Acionistas",
    description: "",
    href: "/investidores/acionistas",
  },
];
