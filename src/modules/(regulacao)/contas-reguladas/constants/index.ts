import { FileText, Leaf, Medal } from "@phosphor-icons/react";

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
    href: "/regulacao/qualidade-de-servico",
  },
  {
    icon: FileText,
    title: "Regulamentos",
    description: "",
    href: "/regulacao/regulamentos",
  },
  {
    icon: Medal,
    title: "Qualidade de Serviço",
    description: "",
    href: "/regulacao/qualidade-de-servico/",
  },
];
