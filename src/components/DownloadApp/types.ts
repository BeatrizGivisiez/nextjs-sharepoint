import { StaticImageData } from "next/image";

export interface DownloadAppProps {
  id?: number;
  title: string;
  description: string;
  buttonGooglePlay?: StaticImageData | string;
  buttonAppStore?: StaticImageData | string;
  imageAlt: string;
  imageSrc: StaticImageData | string;
  grayBackground: boolean;
  buttonAppStoreHref?: string;
  buttonGooglePlayHref?: string;
}
