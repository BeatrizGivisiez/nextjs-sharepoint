import { Fan, Handshake, Scales } from "@phosphor-icons/react";

export const TITLE: string = "Explore outros temas";

export const CARDICONDESCRIPTION: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: Handshake,
    title: "Compromisso Social",
    description: "",
    href: "/sustentabilidade/compromisso-social",
  },
  {
    icon: Scales,
    title: "Financiamento Sustentável",
    description: "",
    href: "/sustentabilidade/financiamento-sustentavel",
  },
  {
    icon: Fan,
    title: "Transição Energética",
    description: "",
    href: "/sustentabilidade/transicao-energetica",
  },
];
