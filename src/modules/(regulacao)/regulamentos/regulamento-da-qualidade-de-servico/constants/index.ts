import { ArrowRight } from "@phosphor-icons/react";
import { StaticImageData } from "next/image";
import Lamp from "@/../public/img/regulacao/qualidadeservico-infoimgactionbutton.jpg";

const baseURL = process.env.baseURL || "";

export const COLLAPSEITEMS: {
  id: string;
  summary: string;
  details: string;
}[] = [
  {
    id: "1",
    summary: "Informação e proteção dos consumidores",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "2",
    summary: "Informação sobre tarifas e preços",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "3",
    summary: "Faturação de energia reativa",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "4",
    summary: "Rotulagem de energia elétrica",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "5",
    summary:
      "Manual de Procedimentos do Acesso e Operação do Sistema Elétrico Público da RAA",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export const INFOIMAGEACTIONBUTTON: {
  title: string;
  subtitle: string;
  buttonPrimary: string;
  buttonPrimaryHref: string;
  iconButtonPrimary: React.ElementType;
  imageAlt: string;
  imageSrc: StaticImageData | string;
  grayBackground: boolean;
  reverse: boolean;
  buttonSecondary: string;
  buttonMessage: string;
  downloadUrl?: string | null;
}[] = [
  {
    title: "Relatórios de auditoria",
    subtitle:
      "​De acordo com o estabelecido no Artigo 68o do RQS, nesta secção serão disponibilizados os relatórios bienais de auditoria, no âmbito da qualidade de serviço.​",
    buttonPrimary: "Relatórios anteriores",
    buttonPrimaryHref:
      "/regulacao/regulamentos/regulamento-da-qualidade-e-servico/relatorios-anteriores",
    iconButtonPrimary: ArrowRight,
    imageAlt: "Contrate os nossos serviços",
    imageSrc: Lamp,
    grayBackground: true,
    reverse: true,
    buttonSecondary: "Relatório atual",
    buttonMessage: "em vigor a partir de 1 de julho de 2023",
    downloadUrl: `${baseURL}/doc/relatorios-anteriores.pdf`,
  },
];
