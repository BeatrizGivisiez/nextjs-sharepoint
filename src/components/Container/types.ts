export interface ContainerHelpProps {
  title: string;
  description: string;
  button: string;
}

export interface ContainerAboutActionProps {
  title?: string;
  button: string;
  buttonHref?: string;
  icon?: React.ElementType;
  isBackground: boolean;
  mailto?: string;
  contacto?: string;
  isDefault?: boolean;
  children?: React.ReactNode;
  downloadUrl?: string | null;
}
