import { FileText, Pen, PhoneCall } from "@phosphor-icons/react";

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
    icon: PhoneCall,
    title: "Call Center",
    description: "",
    href: "/clientes/produtos-e-servicos/call-center",
  },
  {
    icon: Pen,
    title: "Contratação",
    description: "",
    href: "/clientes/contratacao",
  },
  {
    icon: FileText,
    title: "Fatura Eletrónica",
    description: "",
    href: "/clientes/produtos-e-servicos/fatura-eletronica",
  },
];
