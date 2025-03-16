import { StaticImageData } from "next/image";

import infoImageActionButtonOne from "@/../public/img/eda/oquefazemos-infoimgactionbutton-1.jpg";
import infoImageActionButtonTwo from "@/../public/img/eda/oquefazemos-infoimgactionbutton-2.jpg";
import infoImageActionButtonThree from "@/../public/img/eda/oquefazemos-infoimgactionbutton-3.jpg";
import infoImageActionButtonFour from "@/../public/img/eda/oquefazemos-infoimgactionbutton-4.jpg";
import {
  ArrowRight,
  Briefcase,
  Buildings,
  PhoneCall,
} from "@phosphor-icons/react";

export const TITLE: string = "";
export const DESCRIPTION: string =
  "Garantimos a evolução contínua dos 9 sistemas elétricos da Região, promovendo o seu reforço e expansão, tanto ao nível das redes elétricas como das centrais de produção de energia elétrica, onde se regista uma notória diversificação das fontes de energia utilizadas.";

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
    title: "Produção de Energia",
    subtitle:
      "Condução e manutenção das infraestruturas e dos equipamentos de produção das várias ilhas.",
    buttonPrimary: "Saber mais",
    buttonPrimaryHref: "/eda/o-que-fazemos/producao-de-energia",
    iconButtonPrimary: ArrowRight,
    imageAlt: "Produção de Energia",
    imageSrc: infoImageActionButtonOne,
    grayBackground: true,
    reverse: true,
  },
  {
    title: "Distribuição de Energia",
    subtitle:
      "​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​Gestão do transporte e distribuição de energia através de um processo permanente de introdução de melhorias de eficiência e produtividade.",
    buttonPrimary: "Saber mais",
    buttonPrimaryHref: "/eda/o-que-fazemos/distribuicao-de-energia",
    iconButtonPrimary: ArrowRight,
    imageAlt: "Distribuição de Energia",
    imageSrc: infoImageActionButtonFour,
    grayBackground: false,
    reverse: false,
  },
  {
    title: "Comercialização de Energia",
    subtitle:
      "Fornecimento de eletricidade aos consumidores, nomeadamente os mais frágeis, em condições de qualidade e continuidade do serviço.",
    buttonPrimary: "Saber mais",
    buttonPrimaryHref: "/eda/o-que-fazemos/comercializacao-de-energia",
    iconButtonPrimary: ArrowRight,
    imageAlt: "Outros temas EDA",
    imageSrc: infoImageActionButtonThree,
    grayBackground: true,
    reverse: true,
  },
  {
    title: "Despacho de Energia",
    subtitle:
      "Gestão dos sistemas de produção, transporte e distribuição de energia elétrica, proporcionando uma análise integrada das necessidades energéticas.",
    buttonPrimary: "Saber mais",
    buttonPrimaryHref: "/eda/o-que-fazemos/despacho-de-energia",
    iconButtonPrimary: ArrowRight,
    imageAlt: "Outros temas EDA",
    imageSrc: infoImageActionButtonTwo,
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
    icon: Buildings,
    title: "Sobre Nós",
    description: "",
    href: "/eda/sobre-nos",
  },
  {
    icon: Briefcase,
    title: "Trabalhe Connosco",
    description: "",
    href: "https://career012.successfactors.eu/career?company=edaelectriP",
  },
  {
    icon: PhoneCall,
    title: "Call Center",
    description: "",
    href: "/clientes/produtos-e-servicos/call-center",
  },
];

export const CONTAINERABOUTACTION: {
  title: string;
  button: string;
  buttonHref: string;
}[] = [
  {
    title: "Saiba onde estamos",
    button: "Lojas e agentes",
    buttonHref: "/lojas-e-agentes",
  },
];

export const CONTAINERABOUTACTION_TEXT: string =
  "Conheça a nossa rede comercial de lojas, centros de energia e agentes de cobrança.";
