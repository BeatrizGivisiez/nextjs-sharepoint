import { ChartDonut, HandCoins, Siren, TreeStructure } from "@phosphor-icons/react";

export const TITLEDESCRIPTION: {
  title: string;
}[] = [
  {
    title: "Explore outros temas",
  },
];

export const CARDICONDESCRIPTION: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: ChartDonut,
    title: "Acionistas",
    description: "",
    href: "/investidores/acionistas",
  },
  {
    icon: TreeStructure,
    title: "Organização",
    description: "",
    href: "/eda/organizacao",
  },
  {
    icon: Siren,
    title: "Prevenção da Corrupção",
    description: "",
    href: "/prevencao-da-corrupcao",
  },
];
