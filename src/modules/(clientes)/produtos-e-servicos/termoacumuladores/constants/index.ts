import { CreditCard, Coins, PhoneCall } from "@phosphor-icons/react";

export const CARDICONDESCRIPTION: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: Coins,
    title: "Tarifas e Preços",
    description: "",
    href: "/clientes/tarifas-e-precos",
  },
  {
    icon: CreditCard,
    title: "Débito Direto",
    description: "",
    href: "/clientes/produtos-e-servicos/debito-direto",
  },
  {
    icon: PhoneCall,
    title: "Call Center",
    description: "",
    href: "/clientes/produtos-e-servicos/call-center",
  },
];
