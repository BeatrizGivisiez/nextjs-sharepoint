import { CreditCard, FileText, PhoneCall } from "@phosphor-icons/react";

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
    icon: CreditCard,
    title: "Débito Direto",
    description: "",
    href: "/clientes/produtos-e-servicos/debito-direto",
  },
  {
    icon: FileText,
    title: "Fatura Eletrónica",
    description: "",
    href: "/clientes/produtos-e-servicos/fatura-eletronica",
  },
  {
    icon: PhoneCall,
    title: "Call Center",
    description: "",
    href: "/clientes/produtos-e-servicos/call-center",
  },
];
