export interface IHeaderItem {
  text: string;
  url: string;
}
interface ISuperItem {
  category: string;
  links: IHeaderItem[];
  hiddenFromHeader?: boolean;
}

export const HEADER: ISuperItem[] = [
  {
    category: "EDA",
    links: [
      { text: "Sobre Nós", url: "/eda/sobre-nos" },
      { text: "Organização", url: "/eda/organizacao" },
      { text: "O que Fazemos", url: "/eda/o-que-fazemos" },
    ],
  },
  {
    category: "Sustentabilidade",
    links: [
      {
        text: "Modelo de Governance",
        url: "/sustentabilidade/modelo-de-governance",
      },
      {
        text: "Estratégia da Sustentabilidade",
        url: "/sustentabilidade/estrategia-da-sustentabilidade",
      },
      { text: "Temas Materiais", url: "/sustentabilidade/temas-materiais" },
      {
        text: "Qualidade, Ambiente e Segurança",
        url: "/sustentabilidade/qualidade-ambiente-e-seguranca",
      },
      {
        text: "Compromisso Social",
        url: "/sustentabilidade/compromisso-social",
      },
      {
        text: "Transição Energética",
        url: "/sustentabilidade/transicao-energetica",
      },
      {
        text: "Rotulagem Energética",
        url: "/sustentabilidade/rotulagem-energetica",
      },
      {
        text: "Eficiência de Energia Elétrica",
        url: "/sustentabilidade/eficiencia-de-energia-eletrica",
      },
      {
        text: "Financiamento Sustentável",
        url: "/sustentabilidade/financiamento-sustentavel",
      },
      { text: "Economia Circular", url: "/sustentabilidade/economia-circular" },
      {
        text: "Publicações de Sustentabilidade",
        url: "/sustentabilidade/publicacoes",
      },
    ],
  },
  {
    category: "Clientes",
    links: [
      { text: "Os Nossos Clientes", url: "/clientes/os-nossos-clientes" },
      {
        text: "Fornecimento de Energia",
        url: "/clientes/fornecimento-de-energia",
      },
      { text: "Tarifas e Preços", url: "/clientes/tarifas-e-precos" },
      { text: "Contratação", url: "/clientes/contratacao" },
      { text: "Leituras", url: "/clientes/produtos-e-servicos/leituras" },
      { text: "Telecontagem", url: "/clientes/telecontagem" },
      { text: "Faturação", url: "/clientes/faturacao" },
      {
        text: "Necessidades Especiais e Prioritários",
        url: "/clientes/necessidades-especiais-e-prioritarios",
      },
      {
        text: "Interrupções de Energia",
        url: "/clientes/interrupcoes-de-energia",
      },
      { text: "Falta de Energia", url: "/clientes/falta-de-energia" },
      { text: "Reclamações", url: "/clientes/reclamacoes" },
      { text: "Produtos e Serviços", url: "/clientes/produtos-e-servicos" },
    ],
  },
  {
    category: "Comunicação",
    links: [
      { text: "Notícias", url: "/comunicacao/noticias" },
      { text: "Publicações", url: "/comunicacao/publicacoes" },
      { text: "Projetos", url: "/comunicacao/projetos" },
      { text: "Produção e Consumo", url: "/comunicacao/producao-e-consumo" },
      { text: "Multimédia", url: "/comunicacao/multimedia" },
    ],
  },
  {
    category: "Investidores",
    links: [
      { text: "Acionistas", url: "/investidores/acionistas" },
      { text: "Assembleias Gerais", url: "/investidores/assembleias-gerais" },
      {
        text: "Pagamento de Dividendos e Rating",
        url: "/investidores/pagamento-de-dividendos-e-rating",
      },
    ],
  },
  {
    category: "Profissionais",
    links: [
      {
        text: "Especificações Técnicas",
        url: "/profissionais/especificacoes-tecnicas",
      },
      {
        text: "Manuais, Informações e Guias Técnicos",
        url: "/profissionais/manuais-informacoes-e-guias-tecnicos",
      },
    ],
  },
  {
    category: "Regulação",
    links: [
      { text: "Regulamentos", url: "/regulacao/regulamentos" },
      { text: "Qualidade de Serviço", url: "/regulacao/qualidade-de-servico" },
      { text: "Contas Reguladas", url: "/regulacao/contas-reguladas" },
    ],
  },
  {
    category: "",
    hiddenFromHeader: true,
    links: [
      { text: "Apoio ao Cliente", url: "/apoio-ao-cliente" },
      { text: "Home", url: "/" },
      { text: "Lojas e Agentes", url: "/lojas-e-agentes" },
      { text: "Pedidos e Sugestões", url: "/pedidos-e-sugestoes" },
      { text: "Pesquisa", url: "/pesquisa" },
      { text: "Política de Cookies", url: "/politica-de-cookies" },
      { text: "Política de Privacidade", url: "/politica-de-privacidade" },
      { text: "Prevenção da Corrupção", url: "/prevencao-da-corrupcao" },
      { text: "Provedor do Cliente", url: "/provedor-do-cliente" },
      { text: "Visitas de Estudo", url: "/visitas-de-estudo" },
      { text: "EDA Renováveis", url: "/grupo-eda/eda-renovaveis" },
      {
        text: "Fundação Eng. José Cordeiro",
        url: "/grupo-eda/fundacao-eng-jose-cordeiro",
      },
      {
        text: "Serviços de Engenharia, Gestão e Manutenção",
        url: "/grupo-eda/servicos-de-engenharia-gestao-e-manutencao",
      },
      {
        text: "Telecomunicações e Sistemas de Informação",
        url: "/grupo-eda/telecomunicacoes-e-sistemas-de-informacao",
      },
      {
        text: "Comercialização de Energia",
        url: "/eda/o-que-fazemos/comercializacao-de-energia",
      },
      {
        text: "Despacho de Energia",
        url: "/eda/o-que-fazemos/despacho-de-energia",
      },
      {
        text: "Distribuição de Energia",
        url: "/eda/o-que-fazemos/distribuicao-de-energia",
      },
      { text: "Call Center", url: "/clientes/produtos-e-servicos/call-center" },
      {
        text: "Débito Direto",
        url: "/clientes/produtos-e-servicos/debito-direto",
      },
      {
        text: "Fatura Eletrónica",
        url: "/clientes/produtos-e-servicos/fatura-eletronica",
      },
      {
        text: "Leituras",
        url: "/clientes/produtos-e-servicos/leituras",
      },
      {
        text: "Termoacumuladores",
        url: "/clientes/produtos-e-servicos/termoacumuladores",
      },
      { text: "Área Comercial", url: "/clientes/reclamacoes/area-comercial" },
      {
        text: "Iluminação Pública",
        url: "/clientes/reclamacoes/iluminacao-publica",
      },
      {
        text: "Outras Reclamações",
        url: "/clientes/reclamacoes/outras-reclamacoes",
      },
      {
        text: "Prejuízos Causados",
        url: "/clientes/reclamacoes/prejuizos-causados",
      },
      {
        text: "Baterias Ilha de São Miguel",
        url: "/comunicacao/projetos/baterias-ilha-de-sao-miguel",
      },
      {
        text: "Baterias Ilha Terceira",
        url: "/comunicacao/projetos/baterias-ilha-terceira",
      },
      {
        text: "Auditoria a Qualidade de Serviço",
        url: "/regulacao/qualidade-de-servico/auditoria-a-qualidade-de-servico",
      },
      {
        text: "Eventos Excepcionais",
        url: "/regulacao/qualidade-de-servico/eventos-excepcionais",
      },
      {
        text: "Indicadores de Continuidade de Serviço",
        url: "/regulacao/qualidade-de-servico/indicadores-de-continuidade-de-servico",
      },
      {
        text: "Indicadores de Continuidade da Onda de Tensão",
        url: "/regulacao/qualidade-de-servico/indicadores-de-continuidade-da-onda-de-tensao",
      },
      {
        text: "Planos de Monitorização",
        url: "/regulacao/qualidade-de-servico/planos-de-monitorizacao",
      },
      {
        text: "Relatórios de Qualidade de Serviço",
        url: "/regulacao/qualidade-de-servico/relatorios-de-qualidade-de-servico",
      },
      {
        text: "Regulamento da Qualidade de Serviço",
        url: "/regulacao/regulamentos/regulamento-da-qualidade-de-servico",
      },
      {
        text: "Regulamento de Acessos as Redes e Interligações",
        url: "/regulacao/regulamentos/regulamento-de-acesso-as-redes-e-interligacoes",
      },
      {
        text: "Regulamento de Relações Comerciais",
        url: "/regulacao/regulamentos/regulamento-de-relacoes-comerciais",
      },
      {
        text: "Gestão Ambiental",
        url: "/sustentabilidade/qualidade-ambiente-e-seguranca/gestao-ambiental",
      },
      {
        text: "Gestão da Segurança no Trabalho",
        url: "/sustentabilidade/qualidade-ambiente-e-seguranca/gestao-da-seguranca-no-trabalho",
      },
      {
        text: "Gestão de Qualidade",
        url: "/sustentabilidade/qualidade-ambiente-e-seguranca/gestao-de-qualidade",
      },
    ],
  },
];
