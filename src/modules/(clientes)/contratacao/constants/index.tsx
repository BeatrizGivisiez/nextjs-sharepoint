import { StaticImageData } from "next/image";

import infoImageActionButtonOne from "@/../public/img/clientes/contratacao-infoimgactionbutton.jpg";
import {
  ArrowRight,
  CreditCard,
  FileText,
  Storefront,
} from "@phosphor-icons/react";

export const TITLE: string = "Saiba como contratar energia elétrica";
export const DESCRIPTION: string =
  "Para solicitar energia elétrica precisamos de algumas informações e documentação essencial. Aqui, pode encontrar tudo que precisa para iniciar este processo de forma simples e clara.";

export const DOC_TITLE: string = "Documentação";

export const EDA_TITLE: string = "Explore outros temas";

export const LEAFLETS_TITLE: string = "Consulte os nossos folhetos";
export const LEAFLETS_DESCRIPTION: string = "";
export const CONTAINERABOUTACTION: {
  title: string;
  button: string;
  buttonHref?: string;
  mailto: string;
  contacto: string;
}[] = [
  {
    title: "Precisa de ajuda?",
    button: "Apoio ao cliente",
    buttonHref: "/apoio-ao-cliente",
    mailto: "comercial@eda.pt",
    contacto: "800 20 25 25",
  },
];
export const INFOIMAGEACTIONBUTTON: {
  title: string;
  subtitle: string;
  buttonPrimary: string;
  buttonPrimaryHref?: string;
  iconButtonPrimary: React.ElementType;
  buttonSecondary?: string;
  iconButtonSecondary?: React.ElementType;
  buttonMessage?: string;
  imageAlt: string;
  imageSrc: StaticImageData | string;
  grayBackground: boolean;
  reverse: boolean;
}[] = [
  {
    title: "Cálculo do valor de cauções",
    subtitle:
      "O despacho ERSE n.o 9975/2009, de 14 de abril, estabelece as regras e fórmulas aplicáveis ao cálculo do valor das cauções a praticar pela concessionária do transporte e distribuição da Região Autónoma dos Açores (RAA).",
    buttonPrimary: "Saber mais",
    iconButtonPrimary: ArrowRight,
    buttonPrimaryHref: "/clientes/contratacao/calculo-do-valor-de-caucoes",
    imageAlt: "Cálculo do valor de cauções",
    imageSrc: infoImageActionButtonOne,
    grayBackground: false,
    reverse: true,
  },
];

export const CARDICONDESCRIPTION: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: Storefront,
    title: "Lojas e Agentes",
    description: "",
    href: "/lojas-e-agentes",
  },
  {
    icon: FileText,
    title: "Fatura Eletrónica",
    description: "",
    href: "/clientes/produtos-e-servicos/fatura-eletronica",
  },
  {
    icon: CreditCard,
    title: "Débito Direto",
    description: "",
    href: "/clientes/produtos-e-servicos/debito-direto",
  },
];
