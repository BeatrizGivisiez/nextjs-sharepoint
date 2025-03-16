import { BuildingOffice, Lightning, Tree } from "@phosphor-icons/react";
const baseURL = process.env.baseURL || "";

export const TITLE: string = "Explore outros temas";

export const CONTAINERABOUTACTION: {
  title: string;
  button: string;
  downloadUrl: string | null;
}[] = [
  {
    title: "Consulte a nossa Política de Circularidade em Eventos",
    button: "Descarregar",
    downloadUrl: `${baseURL}/doc/politica-de-circularidade-em-eventos.pdf`,
  },
];

export const CARDICONDESCRIPTION: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: Tree,
    title: "Gestão Ambiental",
    description: "",
    href: "/sustentabilidade/qualidade-ambiente-e-seguranca/gestao-ambiental",
  },
  {
    icon: BuildingOffice,
    title: "ESG - Enviromental, Social and Governance",
    description: "",
    href: "/sustentabilidade/modelo-de-governance",
  },
  {
    icon: Lightning,
    title: "Eficiência de Energia Elétrica",
    description: "",
    href: "/sustentabilidade/eficiencia-de-energia-eletrica",
  },
];
