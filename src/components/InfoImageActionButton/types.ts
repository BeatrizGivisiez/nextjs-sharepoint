import { StaticImageData } from "next/image";

export interface InfoImageActionButtonProps {
  id?: number;
  title: string;
  subtitle: string;
  buttonPrimary: string;
  iconButtonPrimary: React.ElementType;
  buttonSecondary?: string;
  iconButtonSecondary?: React.ElementType;
  buttonMessage?: string;
  imageAlt: string;
  imageSrc: StaticImageData | string;
  grayBackground: boolean;
  reverse: boolean;
  buttonPrimaryHref?: string;
  buttonSecondaryHref?: string;
  downloadUrl?: string | null;
  containImg?: boolean;
}
