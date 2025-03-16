import { Coins, HandCoins, PhoneCall } from "@phosphor-icons/react";

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
    icon: HandCoins,
    title: "Faturação",
    description: "",
    href: "/clientes/faturacao",
  },
  {
    icon: Coins,
    title: "Tarifas e Preços",
    description: "",
    href: "/clientes/tarifas-e-precos",
  },
  {
    icon: PhoneCall,
    title: "Call Center",
    description: "",
    href: "/clientes/produtos-e-servicos/call-center",
  },
];
