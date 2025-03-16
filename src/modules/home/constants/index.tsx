import Lamp from "@/../public/img/home/home-infoimgactionbutton.webp";
import EnergyControlLady from "@/../public/img/home/home-infoimgactionbutton-2.webp";
import {
  ArrowRight,
  Briefcase,
  Bus,
  ChatsTeardrop,
} from "@phosphor-icons/react";
import { StaticImageData } from "next/image";

export const CARD_OFFERS = [
  {
    label: "Conhecer todas as tarifas e preços",
    href: "/clientes/tarifas-e-precos",
  },
];

export const CARD_ICON_DESCRIPTIONS = [
  {
    title: "Interaja connosco",
  },
];

export const CARDICONDESCRIPTION: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: Bus,
    title: "Visitas de Estudo",
    description: "",
    href: "/visitas-de-estudo",
  },
  {
    icon: ChatsTeardrop,
    title: "Pedidos e Sugestões",
    description: "",
    href: "/pedidos-e-sugestoes",
  },
  {
    icon: Briefcase,
    title: "Trabalhe Connosco",
    description: "",
    href: "https://career012.successfactors.eu/career?company=edaelectriP",
  },
];

export const INFOIMAGEACTIONBUTTON: {
  title: string;
  subtitle: string;
  buttonPrimary: string;
  iconButtonPrimary: React.ElementType;
  imageAlt: string;
  imageSrc: StaticImageData | string;
  grayBackground: boolean;
  reverse: boolean;
  primaryHref?: string;
}[] = [
  {
    title: "Contrate os nossos serviços",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lore magna aliquat enim adinim veniam, quis nostruditation, sed do eiusmod tempor incididunt ut labore et lo.",
    buttonPrimary: "Saber mais",
    iconButtonPrimary: ArrowRight,
    imageAlt: "Contrate os nossos serviços",
    imageSrc: Lamp,
    grayBackground: true,
    reverse: true,
    primaryHref: "/clientes/contratacao",
  },
  {
    title: "Controle a sua energia de forma simples e rápida",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lore magna aliquat enim adinim veniam, quis nostruditation, sed do eiusmod tempor incididunt ut labore et lo.",
    buttonPrimary: "Saber mais",
    iconButtonPrimary: ArrowRight,
    imageAlt: "Controle a sua energia",
    imageSrc: EnergyControlLady,
    grayBackground: false,
    reverse: false,
    primaryHref: "/clientes/produtos-e-servicos/leituras",
  },
];

export const PAGE_HOME = {
  url: "/",
  title: "Conheça as nossas ofertas energéticas",
  description:
    "Descubra as nossas diversas opções de tarifas de energia, projetadas para se ajustarem ao seu consumo. Encontre a melhor opção para economizar e garantir energia em sua casa ou empresa.",
  content: [
    INFOIMAGEACTIONBUTTON,
    CARDICONDESCRIPTION,
    CARD_OFFERS,
    CARD_ICON_DESCRIPTIONS,
  ],
};
