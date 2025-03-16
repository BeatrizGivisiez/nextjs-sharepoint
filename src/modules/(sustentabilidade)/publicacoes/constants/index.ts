import { BuildingOffice, Bug, Handshake } from "@phosphor-icons/react";

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
    icon: Bug,
    title: "Estratégia da Sustentabilidade",
    description: "",
    href: "/sustentabilidade/estrategia-da-sustentabilidade",
  },
  {
    icon: Handshake,
    title: "Compromisso Social",
    description: "",
    href: "/sustentabilidade/compromisso-social",
  },
];
