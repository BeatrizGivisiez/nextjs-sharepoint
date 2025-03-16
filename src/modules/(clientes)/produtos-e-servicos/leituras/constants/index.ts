import {
  ArrowRight,
  ChatTeardropDots,
  Question,
  MapPin,
  BellRinging,
} from "@phosphor-icons/react";
import { StaticImageData } from "next/image";
import appStoreButtonImg from "@/../public/img/clientes/button-appstore.svg";
import googlePlayButtonImg from "@/../public/img/clientes/button-googleplay.svg";
import ImageLeituraQRCode from "@/../public/img/clientes/leituras-qrcorde.png";
import ImageLeituraAPPEDAOnline from "@/../public/img/clientes/leituras-appedaonline.png";
import infoImageActionButton1 from "@/../public/img/clientes/leituras-infoimgactionbutton.jpg";

export const TITLEDESCRIPTION: {
  title: string;
  description: string;
}[] = [
  {
    title: "É muito fácil comunicar leituras",
    description:
      "Comunique as leituras com a app EDAOnline e evite as estimativas de consumo",
  },
];

export const TOPICIMAGE: {
  backgroundImg: StaticImageData | string;
  backgroundImgAlt: string;
  topics: {
    title: string;
    description: string;
    icon: React.ElementType;
  }[];
}[] = [
  {
    backgroundImg: ImageLeituraAPPEDAOnline,
    backgroundImgAlt: "EDA Mobile",
    topics: [
      {
        title: "Facilidade na comunicação",
        description:
          "Permite o envio de leituras de vários locais de consumo via dispositivos móveis.",
        icon: ChatTeardropDots,
      },
      {
        title: "Notificações personalizadas",
        description:
          "Receba alertas para comunicar leituras em qualquer lugar, a qualquer momento.",
        icon: BellRinging,
      },
      {
        title: "Suporte e ajuda",
        description: "Auxílio na interpretação dos contadores de energia.",
        icon: Question,
      },
      {
        title: "Personalizações dos locais",
        description:
          "Possibilidade em atribuir nomes personalizados aos locais de consumo.",
        icon: MapPin,
      },
    ],
  },
];

export const DOWNLOADAPP: {
  id?: number;
  title: string;
  description: string;
  buttonGooglePlay?: StaticImageData | string;
  buttonAppStore?: StaticImageData | string;
  buttonAppStoreHref?: string;
  buttonGooglePlayHref?: string;
  imageAlt: string;
  imageSrc: StaticImageData | string;
  grayBackground: boolean;
}[] = [
  {
    title: "Faça download da app EDAOnline",
    description:
      "A aplicação está disponível para dispositivos Android, iOS e Windows Phone e pode ser descarregada nas respetivas lojas, ou através do código QR apresentado no ecrã.",
    imageAlt: "Comunicar Leituras",
    imageSrc: ImageLeituraQRCode,
    buttonGooglePlay: googlePlayButtonImg,
    buttonGooglePlayHref:
      "https://play.google.com/store/apps/details?id=pt.globaleda.edaonline",
    buttonAppStore: appStoreButtonImg,
    buttonAppStoreHref: "https://itunes.apple.com/app/id1218230360",
    grayBackground: true,
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
}[] = [
  {
    title: "Comunique as leituras através do nosso Call Center",
    subtitle: "Ligue para o 800 20 25 25 (chamada gratuita) e prima a tecla 1.",
    buttonPrimary: "Contacte-nos",
    buttonPrimaryHref: "/clientes/produtos-e-servicos/call-center",
    iconButtonPrimary: ArrowRight,
    imageAlt: "Call Center",
    imageSrc: infoImageActionButton1,
    grayBackground: true,
    reverse: false,
  },
];
