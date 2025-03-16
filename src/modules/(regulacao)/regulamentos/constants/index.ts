import { Calculator, Leaf, Medal } from "@phosphor-icons/react";

export const PAPERLINKS: {
  title: string;
  url: string;
  isExternal: boolean;
}[] = [
  {
    title: "Qualidade de Serviço",
    url: "/regulacao/regulamentos/regulamento-da-qualidade-e-servico",
    isExternal: false,
  },
  {
    title: "Acesso às Redes e às Interligações",
    url: "/regulacao/regulamentos/regulamento-de-acesso-as-redes-e-as-interligacoes",
    isExternal: false,
  },
  {
    title: "Relações Comerciais",
    url: "/regulacao/regulamentos/regulamento-de-relacoes-comerciais",
    isExternal: false,
  },
  {
    title: "Operações das Redes",
    url: "https://www.erse.pt/atividade/regulamentos-eletricidade/operacao-das-redes/",
    isExternal: true,
  },
  {
    title: "Redes Inteligentes",
    url: "https://www.erse.pt/atividade/regulamentos-eletricidade/redes-inteligentes/",
    isExternal: true,
  },
  {
    title: "Tarifário",
    url: "https://www.erse.pt/atividade/regulamentos-eletricidade/tarifario/",
    isExternal: true,
  },
  {
    title: "Autoconsumo",
    url: "https://www.erse.pt/atividade/regulamentos-eletricidade/autoconsumo/",
    isExternal: true,
  },
  {
    title: "Apropriação Indevida de Energia",
    url: "https://www.erse.pt/atividade/regulamentos-eletricidade/apropriacao-indevida-de-energia/",
    isExternal: true,
  },
];

export const CARDICONDESCRIPTION_TITLE = [{ value: "Explore outros temas" }];

export const CARDICONDESCRIPTION: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: Medal,
    title: "Qualidade de Serviço",
    description: "",
    href: "/regulacao/qualidade-de-servico",
  },
  {
    icon: Leaf,
    title: "Rotulagem Energética",
    description: "",
    href: "/sustentabilidade/rotulagem-energetica",
  },
  {
    icon: Calculator,
    title: "Contas Reguladas",
    description: "",
    href: "/regulacao/contas-reguladas",
  },
];

export const PAGE_REGULAMENTOS = {
  url: "/regulacao/regulamentos",
  title: "Aceda aos regulamentos do setor elétrico",
  description:
    "No âmbito das suas competências, a ERSE (Entidade Reguladora dos Serviços Energéticos), tem aprovados os seguintes regulamentos para o Sistema Elétrico Nacional.",
  content: [PAPERLINKS, CARDICONDESCRIPTION_TITLE, CARDICONDESCRIPTION],
};
