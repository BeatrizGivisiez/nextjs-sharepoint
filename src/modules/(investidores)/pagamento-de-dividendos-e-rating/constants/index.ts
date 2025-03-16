import { Briefcase, ChartDonut, TreeStructure } from "@phosphor-icons/react";

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
    icon: Briefcase,
    title: "Assembleias Gerais",
    description: "",
    href: "/investidores/assembleias-gerais",
  },
  {
    icon: TreeStructure,
    title: "Organização",
    description: "",
    href: "/eda/organizacao",
  },
];
