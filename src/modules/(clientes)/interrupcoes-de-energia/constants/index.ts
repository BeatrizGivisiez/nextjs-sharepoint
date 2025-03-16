export const TITLEDESCRIPTION: {
  title: string;
  description: string;
}[] = [
  {
    title: "Interrupções de Energia",
    description:
      "Consulte as interrupções no fornecimento de energia elétrica que estão programadas.\n\n" +
      "O restabelecimento poderá ser efetuado antes das horas previstas pelo que, durante as interrupções e como medida de segurança, os clientes deverão considerar as instalações em tensão.",
  },
];

export const CONTAINERABOUTACTION2: {
  title: string;
  button: string;
  buttonHref?: string;
}[] = [
  {
    title: "Quer ser notificado sobre as interrupções na sua zona?",
    button: "Pedido de subscrição",
    buttonHref:
      "/clientes/interrupcoes-de-energia/pedido-de-subscricao-de-alertas-de-interrupcoes-de-energia",
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
