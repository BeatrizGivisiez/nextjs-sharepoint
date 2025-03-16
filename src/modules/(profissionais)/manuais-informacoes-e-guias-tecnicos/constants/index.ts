import { Files, LightbulbFilament, PhoneCall } from "@phosphor-icons/react";

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
    icon: Files,
    title: "Especificações Técnicas",
    description: "",
    href: "/profissionais/especificacoes-tecnicas",
  },
  {
    icon: LightbulbFilament,
    title: "Fornecimento de Energia",
    description: "",
    href: "/clientes/fornecimento-de-energia",
  },
  {
    icon: PhoneCall,
    title: "Call Center",
    description: "",
    href: "/clientes/produtos-e-servicos/call-center",
  },
];
