import { StaticImageData } from "next/image";
export interface BannerProps {
  title: string;
  description: string;
  imageSrc: string | undefined;
  link?: string | null;
}
export interface BannerTitleProps {
  id?: 1;
  src: StaticImageData;
  title: string;
}
