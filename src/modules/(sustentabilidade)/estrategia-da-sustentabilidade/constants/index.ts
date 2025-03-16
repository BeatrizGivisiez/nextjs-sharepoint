import { Article, BuildingOffice, GlobeHemisphereEast } from "@phosphor-icons/react";

export const TITLE: string = "Estratégia da Sustentabilidade";
export const CARDICONDESCRIPTION_TITLE: string = "Explore outros temas";

export const CARDICONDESCRIPTION: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: Article,
    title: "Publicações",
    description: "",
    href: "/sustentabilidade/publicacoes",
  },
  {
    icon: GlobeHemisphereEast,
    title: "Temas Materiais",
    description: "",
    href: "/sustentabilidade/temas-materiais",
  },
  {
    icon: BuildingOffice,
    title: "Modelo de Governance",
    description: "",
    href: "/sustentabilidade/modelo-de-governance",
  },
];
