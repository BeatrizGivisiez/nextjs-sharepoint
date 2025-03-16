export const LENGTH_MAIN: number = 50;
export const LENGTH_CODIGOID: number = 10;

export const LENGTH_NUM_INSTALACOES: number = 5;
export const LENGTH_POTENCIA_REQUERIDA: number = 5;

//LENGHT PARA INFOS PESSOAIS
export const LENGTH_NAME: number = 40;
export const LENGTH_EMAIL: number = 50;
export const LENGTH_TELEFONE: number = 9;
export const LENGTH_NIFNIPC: number = 9;

//LENGTH PARA CAMPOS DE REGIÃO
export const LENGTH_MORADA: number = 50;
export const LENGTH_CONCELHO: number = 50;
export const LENGTH_FREGUESIA: number = 50;
export const LENGTH_LOCALIDADE: number = 50;
export const LENGTH_PORTA: number = 5;

//LENGTH PARA CAMPOS DE COMENTÁRIOS
export const LENGTH_ASSUNTO: number = 50;
export const LENGTH_MOTIVO: number = 50;
export const LENGTH_DESCRIPTION: number = 100;
export const LENGTH_MESSAGE: number = 2000;
export const LENGTH_COMENTARIOS: number = 1000;

//MENSAGENS DE INVALIDAÇÃO
export const MANDATORY_DEFAULT: string = "Por favor, preencha este campo.";

export const objSelectRegionsFilter: {
  ilhaName: string;
  concelhos: {
    concelhoName: string;
    freguesias: {
      freguesiaName: string;
    }[];
  }[];
}[] = [
  {
    ilhaName: "Graciosa",
    concelhos: [
      {
        concelhoName: "Santa Cruz da Graciosa",
        freguesias: [
          {
            freguesiaName: "Guadalupe",
          },
          {
            freguesiaName: "Luz",
          },
          {
            freguesiaName: "S. Mateus Praia",
          },
          {
            freguesiaName: "Sta. Cruz da Graciosa",
          },
        ],
      },
    ],
  },
  {
    ilhaName: "Pico",
    concelhos: [
      {
        concelhoName: "Lajes do Pico",
        freguesias: [
          {
            freguesiaName: "Calheta de Nesquim",
          },
          {
            freguesiaName: "Lajes do Pico",
          },
          {
            freguesiaName: "Piedade",
          },
          {
            freguesiaName: "Ribeiras",
          },
          {
            freguesiaName: "Ribeirinha",
          },
          {
            freguesiaName: "São João",
          },
        ],
      },
      {
        concelhoName: "Madalena",
        freguesias: [
          {
            freguesiaName: "Bandeiras",
          },
          {
            freguesiaName: "Candeleira",
          },
          {
            freguesiaName: "Criação Velha",
          },
          {
            freguesiaName: "Madalena",
          },
          {
            freguesiaName: "São Caetano",
          },
          {
            freguesiaName: "São Mateus",
          },
        ],
      },
    ],
  },
];
