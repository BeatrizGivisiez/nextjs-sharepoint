import {
  ArrowRight,
  Coins,
  LightbulbFilament,
  Pen,
} from "@phosphor-icons/react";
import { StaticImageData } from "next/image";
import infoImageActionButtonOne from "@/../public/img/clientes/produtoseservicos-infoimgactionbutton-1.jpg";
import infoImageActionButtonTwo from "@/../public/img/clientes/produtoseservicos-infoimgactionbutton-2.jpg";
import infoImageActionButtonThree from "@/../public/img/clientes/produtoseservicos-infoimgactionbutton-3.jpg";
import infoImageActionButtonFour from "@/../public/img/clientes/produtoseservicos-infoimgactionbutton-4.jpg";

export const TITLE: string = "Produtos pensados para o seu conforto";
export const DESCRIPTION: string = "";

export const INFOIMAGEACTIONBUTTON: {
  title: string;
  subtitle: string;
  buttonPrimary: string;
  iconButtonPrimary: React.ElementType;
  buttonHref: string;
  buttonMessage?: string;
  imageAlt: string;
  imageSrc: StaticImageData | string;
  grayBackground: boolean;
  reverse: boolean;
}[] = [
  {
    title: "Fatura Eletrónica",
    subtitle:
      "Contribua para um ambiente melhor. Adira à fatura eletrónica, a subscrição é gratuita.",
    buttonPrimary: "Saber mais",
    iconButtonPrimary: ArrowRight,
    buttonHref: "/clientes/produtos-e-servicos/fatura-eletronica",
    imageAlt: "Fatura eletrónica",
    imageSrc: infoImageActionButtonTwo,
    grayBackground: true,
    reverse: true,
  },
  {
    title: "Pagamento por Débito Direto",
    subtitle:
      "Para comodidade no pagamento da fatura opte pelo Pagamento por Débito Direto - SEPA (Área Única de Pagamento em Euros).",
    buttonPrimary: "Saber mais",
    iconButtonPrimary: ArrowRight,
    buttonHref: "/clientes/produtos-e-servicos/debito-direto",
    imageAlt: "Pagamento por débito direto",
    imageSrc: infoImageActionButtonOne,
    grayBackground: false,
    reverse: false,
  },
  {
    title: "Leituras",
    subtitle:
      "Comunique as leituras através da nossa aplicação EDAOnline, ou do Call Center, e evite as estimativas de consumo.",
    buttonPrimary: "Saber mais",
    iconButtonPrimary: ArrowRight,
    buttonHref: "/clientes/produtos-e-servicos/leituras",
    imageAlt: "Leituras online",
    imageSrc: infoImageActionButtonThree,
    grayBackground: true,
    reverse: true,
  },
  {
    title: "Precisa de ajuda?",
    subtitle: "Contacte o nosso Call Center e esclareça as suas dúvidas.",
    buttonPrimary: "Saber mais",
    iconButtonPrimary: ArrowRight,
    buttonHref: "/clientes/produtos-e-servicos/call-center",
    imageAlt: "Dúvidas",
    imageSrc: infoImageActionButtonFour,
    grayBackground: false,
    reverse: false,
  },
];

export const CARDICONDESCRIPTION_TITLE: string = "Explore outros temas";

export const CARDICONDESCRIPTION: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: LightbulbFilament,
    title: "Fornecimento de Energia",
    description: "",
    href: "/clientes/fornecimento-de-energia",
  },
  {
    icon: Pen,
    title: "Contratação",
    description: "",
    href: "/clientes/contratacao",
  },
  {
    icon: Coins,
    title: "Tarifas e Preços",
    description: "",
    href: "/clientes/tarifas-e-precos",
  },
];
