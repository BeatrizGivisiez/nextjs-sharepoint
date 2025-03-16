import { Buildings, Lightning, Scales, Siren } from "@phosphor-icons/react";

export const TITLE: string = "Órgãos Sociais";
export const CARDICONDESCRIPTION: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: Buildings,
    title: "Sobre Nós",
    description: "",
    href: "/eda/sobre-nos",
  },
  {
    icon: Lightning,
    title: "O Que Fazemos",
    description: "",
    href: "/eda/o-que-fazemos",
  },
  {
    icon: Siren,
    title: "Prevenção da Corrupção",
    description: "",
    href: "/prevencao-da-corrupcao",
  },
];
export const objTitleDescriptionOrganograma: {
  title: string;
  description: string;
}[] = [
  {
    title: "Organigrama",
    description: "",
  },
];
