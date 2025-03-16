import { CreditCard, FileText, Storefront } from "@phosphor-icons/react";

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
    icon: Storefront,
    title: "Lojas e Agentes",
    description: "",
    href: "/lojas-e-agentes",
  },
  {
    icon: FileText,
    title: "Fatura Eletrónica",
    description: "",
    href: "/clientes/produtos-e-servicos/fatura-eletronica",
  },
  {
    icon: CreditCard,
    title: "Débito Direto",
    description: "",
    href: "/clientes/produtos-e-servicos/debito-direto",
  },
];
