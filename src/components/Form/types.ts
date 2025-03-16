export interface formCollapsibleSectionProps {
  mailto: string;
  label: string;
}
export interface FormTextFieldProps {
  title: string;
  placeholder: string;
  error: boolean;
  maxLength: number;
  isOpcional: boolean;
  description?: string;
  onInputChange: (value: string) => void;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setError?: (field: string, value: boolean) => void;
  customInputProps?: any;
}

export interface FormPickerProps {
  title: string;
  error: boolean;
  isOpcional: boolean;
  onInputChange: (value: string) => void;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FormAlertProps {
  severity: string;
  alertDisplay: boolean;
  sucessMessage: string;
  handleClose: (event: React.SyntheticEvent) => void;
}

export interface FormErrors {
  nomeContacto: boolean;
  nomeTitular: boolean;
  nome: boolean;
  email: boolean;
  mensagem: boolean;
  message: boolean;
  morada: boolean;
  moradaPredio: boolean;
  localidade: boolean;
  localidadePredio: boolean;
  concelho: boolean;
  concelhoPredio: boolean;
  motivoReclamacao: boolean;
  nif: boolean;
  comentarios: boolean;
  localidadeAvaria: boolean;
  concelhoAvaria: boolean;
  pontosDeReferencia: boolean;
  equipamentosDanificados: boolean;
}

interface Freguesia {
  id: string;
  name: string;
}

interface Concelho {
  id: string;
  name: string;
  childTerms: Freguesia[];
}

interface Ilha {
  id: string;
  name: string;
  childTerms: Concelho[];
}
