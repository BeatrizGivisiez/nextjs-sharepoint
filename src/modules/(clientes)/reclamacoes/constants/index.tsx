import { StaticImageData } from "next/image";
import galleryImageButtonOne from "@/../public/img/clientes/reclamacoes-infoimgactionbutton-1.webp";
import galleryImageButtonTwo from "@/../public/img/clientes/reclamacoes-infoimgactionbutton-2.jpg";
import galleryImageButtonThree from "@/../public/img/clientes/reclamacoes-infoimgactionbutton-3.jpg";
import galleryImageButtonFour from "@/../public/img/clientes/reclamacoes-infoimgactionbutton-4.jpg";
import { PhoneCall, User, Storefront } from "@phosphor-icons/react";

export const objTitleDescription: {
  title: string;
  description: string;
}[] = [
  {
    title: "Reclamações",
    description:
      "Caso pretenda apresentar alguma reclamação relativa aos serviços prestados pela EDA, poderá fazê-lo através dos Pontos de Atendimento Presencial (Lojas e Centros de Energia), Call Center, Livro de Reclamações físico (disponíveis nos Pontos de Atendimento Presencial), Livro de Reclamações On-line, por escrito através do e-mail (comercial@eda.pt, ou carta) ou, em alternativa, preenchendo um dos formulários que entenda por mais adequado à sua reclamação.",
  },
];
export const objGalleryImageActionButton: {
  items: {
    title: string;
    description: string;
    imageSrc: StaticImageData;
    imageAlt: string;
    button: { href: string; label: string };
  }[];
}[] = [
  {
    items: [
      {
        title: "Comercial",
        description:
          "Problemas de leitura, estimativas desajustadas, faturação incorreta ou anomalias de cobrança.",
        imageSrc: galleryImageButtonOne,
        imageAlt: "Formulário",
        button: {
          label: "Formulário",
          href: "/clientes/reclamacoes/area-comercial",
        },
      },
      {
        title: "Prejuízos causados",
        description:
          "Danos em equipamentos elétricos resultantes de anomalias ou incidentes na rede elétrica.",
        imageSrc: galleryImageButtonTwo,
        imageAlt: "Formulário",
        button: {
          label: "Formulário",
          href: "/clientes/reclamacoes/prejuizos-causados",
        },
      },
      {
        title: "Iluminação pública*",
        description: "Rua às escuras, iluminárias fundidas, etc.",
        imageSrc: galleryImageButtonThree,
        imageAlt: "Formulário",
        button: {
          label: "Formulário",
          href: "/clientes/reclamacoes/iluminacao-publica",
        },
      },
      {
        title: "Outras reclamações",
        description:
          "Outras reclamações que não se enquadram em nenhum dos tipos já indicados.",
        imageSrc: galleryImageButtonFour,
        imageAlt: "Formulário",
        button: {
          label: "Formulário",
          href: "/clientes/reclamacoes/outras-reclamacoes",
        },
      },
    ],
  },
];

export const objTitleDescription3_Reclamacoes: {
  title: string;
}[] = [
  {
    title: "Explore outros temas",
  },
];

export const CARDICONDESCRIPTION: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: PhoneCall,
    title: "Call Center",
    description: "",
    href: "/clientes/produtos-e-servicos/call-center",
  },
  {
    icon: Storefront,
    title: "Lojas e Agentes",
    description: "",
    href: "/lojas-e-agentes",
  },
  {
    icon: User,
    title: "Provedor de Cliente",
    description: "",
    href: "/provedor-do-cliente",
  },
];

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
