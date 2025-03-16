import { FileText, Leaf, Calculator } from "@phosphor-icons/react";

export const CARDICONDESCRIPTION: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: Leaf,
    title: "Rotulagem Energética",
    description: "",
    href: "/sustentabilidade/rotulagem-energetica",
  },
  {
    icon: FileText,
    title: "Regulamentos",
    description: "",
    href: "/regulacao/regulamentos",
  },
  {
    icon: Calculator,
    title: "Contas Reguladas",
    description: "",
    href: "/regulacao/contas-reguladas",
  },
];
