const baseURL = process.env.baseURL || "";
import { Siren, TreeStructure, Lightning } from "@phosphor-icons/react";

export const TIMELINE_TITLE: string = "Caminho Percorrido";
export const TIMELINE_TITLE_DESCRIPTION: string = "";

export const objTitleDescriptionEDASobreNos: {
  title: string;
  description: string;
  text: string;
}[] = [
  {
    title: "Ficha da Empresa",
    description: "",
    text: "RICH TEXT EXAMPLE",
  },
];

export const objSobreNosPage = [
  {
    lineInfo: [
      {
        icon: "people",
        info: "2 650",
        text: "trabalhadores",
      },
      {
        icon: "building",
        info: "+43",
        text: "Anos consigo",
      },
      {
        icon: "taken",
        info: "42 650",
        text: "Casas com a nossa energia",
      },
    ],
  },
];

export const objTitleDescriptionSobreNosPath: {
  title: string;
  description: string;
}[] = [
  {
    title: "O caminho Percorrido",
    description: "",
  },
];

export const objTitleDescriptionSobreNosTemas: {
  title: string;
}[] = [
  {
    title: "Explore outros temas",
  },
];

export const objTimelinePagination = [
  {
    id: 0,
    year: "1980",
    description:
      "No dia 20 de junho de 1980, a Assembleia Regional dos Açores aprovou uma proposta de Decreto Regulamentar Regional que visava a criação de uma empresa regional que fosse capaz de suprir as necessidadesdo subsetor energético – a eletricidade, que se encontrava em grandes dificuldades. Para este efeito, a 21 de agosto do mesmo ano, foi publicado o Decreto Regional nº 16/80/A, que previa a constituição de uma empresa pública regional, com a designação de Empresa de Electricidade dos Açores, E.P. Constituída a 17 de julho do ano seguinte, a EDA, E.P., como ficou abreviada e popularmente conhecida, tinha como objetivo o estabelecimento e a exploração de serviço público de produção, transporte e distribuição de energia elétrica no arquipélago.",
  },
  {
    id: 1,
    year: "1981",
    description:
      "A 1 de outubro de 1981 arrancou as suas atividades, tendo como 1º Presidente do Conselho de Gerência o Engenheiro Deodato Chaves de Magalhães Sousa, aderindo à mesma todas as entidades responsáveis pela gestão dos diversos sistemas elétricos de energia dos Açores, exceção feita aos Serviços Eléctricos da Câmara Municipal da Praia da Vitória, Federação dos Municípios da Ilha das Flores e Câmara Municipal do Corvo.",
  },
  {
    id: 2,
    year: "1984",
    description:
      "Em janeiro de 1984 integra-se na Empresa de Electricidade dos Açores, E.P. o património dos Serviços Eléctricos da Câmara Municipal da Praia da Vitória, ficando a EDA, E.P sem jurisdição apenas no Grupo Ocidental do arquipélago.",
  },
  {
    id: 3,
    year: "1992",
    description:
      "A EDA, durante o primeiro decénio da sua existência, consolidou uma posição no tecido empresarial açoriano invejável, tendo-lhe sido entregue, a 30 de março de 1992, pelo jornal Açoriano Oriental, os troféus relativos à maior empresa dos Açores, em volume de negócios e a valor acrescentado bruto. Tendo em conta as expectativas criadas no tecido empresarial e atendendo ao sucesso da sua estratégia, a EDA, no início dos anos 90, inicia um processo inovador de progresso tecnológico, reorientando-se para uma reestruturação nos seus sistemas de informação, permitindo-lhe assumir uma nova atitude face aos seus clientes e aos seus colaboradores.",
  },
  {
    id: 4,
    year: "1994",
    description:
      "A 13 de janeiro de 1994 foram assinados os protocolos de transferência para a EDA, E.P. das instalações, serviço e transporte de energia elétrica que eram explorados pela Federação dos Municípios da Ilha das Flores e pela Câmara Municipal do Corvo. Assim, a EDA, E.P., pela primeira vez no seu historial, passa a ter intervenção em todo o território da Região Autónoma dos Açores. A década de noventa marcará também uma nova aposta nas energias alternativas e na preservação do ambiente, designadamente através do reforço do investimento em centrais hidroelétricas e parques eólicos.",
  },
  {
    id: 5,
    year: "1997",
    description:
      "A 8 de abril de 1997, a EDA é transformada em sociedade anónima, introduzindo-se um novo conceito empresarial, o de Grupo EDA, através da aposta na diversificação e desenvolvimento de novos negócios em áreas onde a EDA detinha elevado “know-how”. A 30 de dezembro de 1999, concretiza-se um importante passo no sentido da reprivatização da empresa, com a entrada, como parceiro estratégico, da EDP no seu capital social, com 10%.",
  },
  {
    id: 6,
    year: "2000",
    description:
      "Em 2000 foi iniciada uma profunda reestruturação orgânica da empresa, destacando-se a extinção dos centros de exploração por ilha e a criação de três grandes áreas verticalizadas: Produção, Distribuição e Comercial.",
  },
  {
    id: 7,
    year: "2001",
    description:
      "Em 2001 foi concluído o Sistema de Garantia da Qualidade da Manutenção e obtida a certificação, segundo a Norma ISO NP EN 9002, dos serviços de manutenção mecânica da produção.",
  },
  {
    id: 8,
    year: "2002",
    description:
      "Em 2002, com a publicação do Decreto-Lei nº 69/2002, de 25 de março, verificou-se uma substancial alteração no setor elétrico regional, com a extensão das competências da ERSE - Entidade Reguladora dos Serviços Energéticos às Regiões Autónomas dos Açores e da Madeira. Assim, as respetivas empresas passaram a ser sujeitas ao seu controlo e regulação e o sobrecusto da insularidade a ser suportado no quadro tarifário nacional.",
  },
  {
    id: 9,
    year: "2003",
    description:
      "Em 2003 iniciou-se a aplicação do novo processo de fixação de tarifas e cálculo das compensações pela convergência dos preços da energia elétrica pela ERSE, passando a EDA a receber mensalmente o valor assim definido.",
  },
  {
    id: 10,
    year: "2005",
    description:
      "Em 2005, através da Resolução do Conselho de Ministros N.º 1/2005, de 3 janeiro, é autorizado o processo de alienação de um lote indivisível de 4.748.100 ações representativas de 33,92 % do capital social da Eletricidade dos Açores, S. A.. O concurso foi ganho pela ESA, Energia e Serviços dos Açores, S.A., tendo sido este resultado homologado, sob proposta do Governo Regional dos Açores, pela Resolução do Conselho de Ministros N.º 116/2005, de 23/junho. Na sequência desta alienação procedeu-se, em Assembleia Geral realizada a em julho, à eleição dos novos os órgãos de gestão. Posteriormente, em setembro, foi efetuada a segunda fase do processo de reprivatização, através de oferta pública de venda (OPV) de 837.900 ações representativas de 5,98% do capital social, reservada a trabalhadores, pequenos subscritores e emigrantes.",
  },
  {
    id: 11,
    year: "2006",
    description:
      "Em 2006, a ESA, Energia e Serviços dos Açores, reforça a sua participação na EDA, ficando detentora de cerca de 40% do seu total.",
  },
  {
    id: 12,
    year: "2008",
    description:
      "Em 2008 dá-se a cisão da GLOBALEDA, empresa onde a participação da EDA passa a 60% e donde resulta a criação duma nova empresa para a área dos Sistemas de informação – a NOVABASE ATLÂNTICO.",
  },

  {
    id: 13,
    year: "2011",
    description:
      "Em 2011, por orientação do Governo Regional, expressa através da Resolução do Conselho de Governo n.º 132/2011, de 10 de novembro, é iniciado um processo de alienação de participações, designadamente da CCAM – Caixa de Crédito Agrícola Mútuo, IATH, S.A., ControlAuto Açores, Lda, Banif AçorPensões, S.A. e ONIAÇORES. S.A, donde consta igualmente a decisão de fusão da SOGEO – Sociedade Geotérmica dos Açores, S.A com a EEG – Empresa de Electricidade e Gaz, Lda.",
  },
  {
    id: 14,
    year: "2012",
    description:
      "A 14 de dezembro de 2012, o Conselho de Administração da EDA, considerando a Resolução do Conselho do Governo n.º 132/2011, de 10 de Novembro, na qual está prevista a realização de uma reestruturação interna ao nível das associadas da EDA, deliberou autorizar a compra da participação do BANIF nos capitais sociais das empresas SOGEO, S.A. e Norma Açores, S.A.",
  },
  {
    id: 15,
    year: "2013",
    description:
      "Em 2013, o Conselho de Administração da EDA, no âmbito da reestruturação do  Setor Empresarial da Região Autónoma dos Açores, que foi determinada pela Resolução do Conselho do Governo n.º 132/2011 de 10 de novembro, deliberou instruir a Gerência da EEG e o Conselho de Administração da SOGEO, respetivamente, para que iniciassem os procedimentos necessários à fusão destas empresas. Em 27 de dezembro de 2013 a SOGEO incorporou a EEG e passou a denominar-se EDA RENOVAVEIS, S.A.. Também em 2013, no âmbito da reestruturação económico financeira da GLOBALEDA – Telecomunicações e Sistemas de Informação, S.A. , esta empresa  incorporou a NOVABASE ATLÂNTICO, Sistemas de Informação, S.A., e procedeu-se à sua recomposição acionista, passando a EDA a deter 74,9% do seu capital social, e a Novabase Business Solutions, 25,1%.",
  },
  {
    id: 16,
    year: "2014",
    description:
      "Em 2014 a EDA RENOVÁVEIS iniciou a sua atividade com os recursos humanos e os meios advenientes das sociedades fundidas (SOGEO e EEG), dispostos numa nova estrutura. No final deste ano, a GEOTERCEIRA fundiu-se, também, na EDA RENOVÁVEIS, ficando esta empresa responsável pela exploração dos recursos hídricos, eólicos e geotérmicos do Grupo EDA.",
  },
];

export const CONTAINERABOUTACTION: {
  title: string;
  button: string;
  downloadUrl: string | null;
}[] = [
  {
    title: "Consulte os nossos Estatutos",
    button: "Descarregar",
    downloadUrl: `${baseURL}/doc/estatutos-eda.pdf`,
  },
];

export const CARDICONDESCRIPTION: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: TreeStructure,
    title: "Organização",
    description: "",
    href: "/eda/organizacao",
  },
  {
    icon: Lightning,
    title: "O Que Fazemos",
    description: "",
    href: "/eda/o-que-fazemos",
  },
  {
    icon: Siren,
    title: "Prevenção da Corrupção",
    description: "",
    href: "/prevencao-da-corrupcao",
  },
];
