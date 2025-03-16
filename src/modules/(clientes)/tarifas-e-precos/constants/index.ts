import {
  Download,
  ArrowRight,
  LightbulbFilament,
  PhoneCall,
  HandCoins,
} from "@phosphor-icons/react";
import infoImageActionButton1 from "@/../public/img/clientes/tarifaseprecos-infoimgactionbutton.jpg";
import { StaticImageData } from "next/image";

const baseURL = process.env.baseURL || "";

export const TITLEDESCRIPTION: {
  title: string;
  description: string;
}[] = [
  {
    title: "Soluções feitas à sua medida",
    description:
      "​​​​O sistema tarifário de venda de energia elétrica é o conjunto de regras e de preços utilizados pelo distribuidor para faturação dos fornecimentos de energia elétrica ao consumidor.",
  },
];

export const INFOIMAGEACTIONBUTTON: {
  title: string;
  subtitle: string;
  buttonPrimary: string;
  buttonPrimaryHref: string;
  iconButtonPrimary: React.ElementType;
  buttonSecondary?: string;
  iconButtonSecondary?: React.ElementType;
  buttonMessage?: string;
  imageAlt: string;
  imageSrc: StaticImageData | string;
  grayBackground: boolean;
  reverse: boolean;
  downloadUrl?: string | null;
}[] = [
  {
    title: "Consulte o preçário",
    subtitle:
      "Mantenha-se informado sobre os preços em vigor na Região Autónoma dos Açores.",
    buttonPrimary: "Tarifas anteriores",
    buttonPrimaryHref: "/clientes/tarifas-e-precos/tarifas-anteriores", //trocar a rota
    iconButtonPrimary: ArrowRight,
    imageAlt: "Calculator",
    imageSrc: infoImageActionButton1,
    grayBackground: true,
    reverse: true,
    buttonSecondary: "Tarifa em vigor",
    iconButtonSecondary: Download,
    buttonMessage: "",
    downloadUrl: `${baseURL}/doc/tarifa-em-vigor.pdf`,
  },
];

export const TITLEDESCRIPTION_EDA: {
  title: string;
}[] = [
  {
    title: "Explore outros temas",
  },
];

export const TITLEDESCRIPTION_GALLERYLEAFLETS: {
  title: string;
  description: string;
}[] = [
  {
    title: "Consulte os nossos folhetos",
    description: "",
  },
];

export const CARDICONDESCRIPTION: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: HandCoins,
    title: "Faturação",
    description: "",
    href: "/clientes/faturacao",
  },
  {
    icon: LightbulbFilament,
    title: "Racionalização do Consumo de Energia",
    description: "",
    href: "/clientes/faturacao",
  },
  {
    icon: PhoneCall,
    title: "Call Center",
    description: "",
    href: "/clientes/produtos-e-servicos/call-center",
  },
];
