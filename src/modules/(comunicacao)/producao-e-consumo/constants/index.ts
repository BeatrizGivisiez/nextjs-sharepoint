const baseURL = process.env.baseURL || "";

export const TITLE: string = "Produção e Consumo";

export const TITLEDESCRIPTION: {
  title: string;
  description: string;
}[] = [
  {
    title: "Procura e Oferta de Energia Elétrica",
    description:
      "Consulte o histórico das publicações mensais de Procura e Oferta de Energia Elétrica (POEE).",
  },
];

export const CONTAINERABOUTACTION: {
  title: string;
  button: string;
  downloadUrl: string | null;
}[] = [
  {
    title: "",
    button: "Descarregar POEE",
    downloadUrl: `${baseURL}/doc/excel-POEE.xlsx`,
  },
];

export const CONTAINERABOUTACTION_TEXT: string =
  "Pode descarregar a informação histórica e atualizada em formato Excel.";
