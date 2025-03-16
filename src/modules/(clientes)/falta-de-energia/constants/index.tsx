const baseURL = process.env.baseURL || "";
import { StaticImageData } from "next/image";

import infoImageActionButtonOne from "@/../public/img/clientes/faltadeenergia-infoimgactionbutton-1.webp";
import {
  ArrowRight,
  LightningSlash,
  PlugsConnected,
  Television,
} from "@phosphor-icons/react";

export const TITLE: string = "Falta de Energia";
export const DESCRIPTION: string =
  "A falta de energia elétrica na sua instalação poderá dever-se a vários fatores, sendo os mais usuais:";

export const IFONINFOR = [
  {
    icon: PlugsConnected,
    title: "Número excessivo de aparelhos ligados em simultâneo (sobrecarga)",
  },
  {
    icon: Television,
    title: "Avaria de algum dos seus aparelhos ou da sua instalação elétrica",
  },
  {
    icon: LightningSlash,
    title: "Avaria ou deficiência exterior à sua instalação",
  },
];

export const STEPVERTICALINFORMATIVE_TITLE: string = "Como é que pode atuar?";
export const STEPVERTICALINFORMATIVE_DESCRIPTION: string =
  "Recomendamos alguns passos e dicas para saber como deve proceder ao ter uma falta de energia. Após seguir estes passos, se não conseguir, contacte-nos.";

export const CONTAINERABOUTACTION: {
  title: string;
  button: string;
  downloadUrl: string | null;
}[] = [
  {
    title: "Consulte o nosso folheto",
    button: "Descarregar folheto",
    downloadUrl: `${baseURL}/doc/falta-de-energia.pdf`,
  },
];

export const CONTAINERABOUTACTION_TEXT: string = "";

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
    title: "Precisa de ajuda?",
    subtitle:
      "Contacte o nosso Call Center e esclareça as suas dúvidas. \nLigue para o 800 20 25 25 (chamada gratuita), ou envie um e-mail para comercial@eda.pt",
    buttonPrimary: "Apoio ao cliente",
    iconButtonPrimary: ArrowRight,
    buttonPrimaryHref: "/apoio-ao-cliente",
    imageAlt: "Apoio ao cliente",
    imageSrc: infoImageActionButtonOne,
    grayBackground: false,
    reverse: false,
  },
];
