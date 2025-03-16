import { Coins, Pen, PhoneCall } from "@phosphor-icons/react";

export const TITLEDESCRIPTION_GALLERYLEAFLETS: {
  title: string;
  description: string;
}[] = [
  {
    title: "Consulte os nossos folhetos",
    description: "",
  },
];

export const TITLEDESCRIPTION_CARDICONDESCRIPTION: {
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
    icon: Pen,
    title: "Contratação",
    description: "",
    href: "/clientes/contratacao",
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
