const baseURL = process.env.baseURL || "";

import { Bug, BuildingOffice, Tree } from "@phosphor-icons/react";

export const TITLE: string = "Explore outros temas";

export const CARDICONDESCRIPTION: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: BuildingOffice,
    title: "Modelo de Governance",
    description: "",
    href: "/sustentabilidade/modelo-de-governance",
  },
  {
    icon: Bug,
    title: "Estratégia da Sustentabilidade",
    description: "",
    href: "/sustentabilidade/estrategia-da-sustentabilidade",
  },
  {
    icon: Tree,
    title: "Gestão Ambiental",
    description: "",
    href: "/sustentabilidade/qualidade-ambiente-e-seguranca/gestao-ambiental",
  },
];

export const CONTAINERABOUTACTION: {
  title: string;
  button: string;
  downloadUrl: string | null;
}[] = [
  {
    title: "Consulte a nossa Política da Qualidade, Ambiente e Segurança",
    button: "Descarregar",
    downloadUrl: `${baseURL}/doc/politica-da-qualidade-ambiente-e-seguranca.pdf`,
  },
];
