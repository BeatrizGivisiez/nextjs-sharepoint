import infoImageActionButtonOne from "@/../public/img/home/apoioaocliente-infoimgactionbutton.webp";
import infoImageActionButtonTwo from "@/../public/img/home/apoioaocliente-infoimgactionbutton-2.webp";
import infoImageActionButtonThree from "@/../public/img/home/apoioaocliente-infoimgactionbutton-3.webp";
import infoImageActionButtonFour from "@/../public/img/home/apoioaocliente-infoimgactionbutton-4.webp";
import { ArrowRight, Envelope } from "@phosphor-icons/react";
import { StaticImageData } from "next/image";

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
    title: "Fale connosco",
    subtitle:
      "O nosso Call Center 800 20 25 25 (chamada gratuita) está disponível 365 dias por ano, das 06h00 às 24h00.",
    buttonPrimary: "Saber mais",
    buttonPrimaryHref: "/clientes/produtos-e-servicos/call-center",
    iconButtonPrimary: ArrowRight,
    imageAlt: "Call Center",
    imageSrc: infoImageActionButtonOne,
    grayBackground: true,
    reverse: true,
  },
  {
    title: "Envie-nos um e-mail",
    subtitle:
      "Se prefere o contacto por escrito, envie um e-mail para comercial@eda.pt.",
    buttonPrimary: "Contactar",
    iconButtonPrimary: Envelope,
    buttonPrimaryHref: "mailto:comercial@eda.pt",
    imageAlt: "Email",
    imageSrc: infoImageActionButtonTwo,
    grayBackground: false,
    reverse: false,
  },
  {
    title: "Saiba onde estamos, nas 9 ilhas",
    subtitle:
      "Conheça a nossa rede comercial de lojas, centros de energia e agentes de cobrança.",
    buttonPrimary: "Lojas e agentes",
    buttonPrimaryHref: "/lojas-e-agentes",
    iconButtonPrimary: ArrowRight,
    imageAlt: "Lojas",
    imageSrc: infoImageActionButtonThree,
    grayBackground: true,
    reverse: true,
  },
  {
    title: "Tem uma reclamação?",
    subtitle:
      "Consulte os meios que existem à sua disposição para apresentar uma reclamação aos serviços prestados.",
    buttonPrimary: "Saber mais",
    buttonPrimaryHref: "/clientes/reclamacoes",
    iconButtonPrimary: ArrowRight,
    imageAlt: "Reclamações",
    imageSrc: infoImageActionButtonFour,
    grayBackground: false,
    reverse: false,
  },
];

export const PAGE_APOIO_AO_CLIENTE = {
  url: "/apoio-ao-cliente",
  title: "Apoio ao Cliente",
  description: "Toda a informação que precisa para contactar a EDA.",
  content: [INFOIMAGEACTIONBUTTON],
};
