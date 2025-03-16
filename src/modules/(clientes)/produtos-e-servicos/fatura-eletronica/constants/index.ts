import { CreditCard, HandCoins, PhoneCall } from "@phosphor-icons/react";

export const TITLEDESCRIPTION_PAPERLINKS: {
  title: string;
  description: string;
}[] = [
  {
    title: "Como ler uma fatura?",
    description:
      "Clique no tipo de fatura que pretender ver e passe o cursor sobre os pontos amarelos para aceder à informação.",
  },
];

export const PAPERLINKS: {
  title: string;
  url: string;
}[] = [
  { title: "Fatura Baixa Tensão", url: "/" },
  { title: "Fatura Baixa Tensão Especial", url: "/" },
  { title: "Fatura Média Tensão", url: "/" },
];

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
