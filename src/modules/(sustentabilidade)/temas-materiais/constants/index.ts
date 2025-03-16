import { Fan, BuildingOffice, Scales } from "@phosphor-icons/react";

export const TITLE: string = "Explore outros temas";

export const CARDICONDESCRIPTION: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: BuildingOffice,
    title: "Modelo de Governance",
    description: "",
    href: "/sustentabilidade/modelo-de-governance",
  },
  {
    icon: Scales,
    title: "Financiamento Sustentável",
    description: "",
    href: "/sustentabilidade/financiamento-sustentavel",
  },
  {
    icon: Fan,
    title: "Estratégia da Sustentabilidade",
    description: "",
    href: "/sustentabilidade/estrategia-da-sustentabilidade",
  },
];
