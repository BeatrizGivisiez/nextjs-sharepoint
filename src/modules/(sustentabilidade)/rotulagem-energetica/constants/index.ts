import {
  Fan,
  HandCoins,
  Lightning,
  PhoneCall,
  Scales,
  Tree,
} from "@phosphor-icons/react";

export const TITLE: string = "Explore outros temas";

export const CARDICONDESCRIPTION: {
  icon: React.ElementType;
  title: string;
  href: string;
}[] = [
  {
    icon: Lightning,
    title: "Eficiência Energética",
    href: "/sustentabilidade/eficiencia-de-energia-eletrica",
  },
  {
    icon: Tree,
    title: "Gestão Ambiental",
    href: "/sustentabilidade/qualidade-ambiente-e-seguranca/gestao-ambiental",
  },
  {
    icon: Fan,
    title: "Transição Energética",
    href: "/sustentabilidade/transicao-energetica",
  },
];
