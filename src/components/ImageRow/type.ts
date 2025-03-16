import { StaticImageData } from "next/image";

export interface ImageRowProps {
  imageSrc: StaticImageData | string;
  imageAlt: string;
  optionalImageSrc?: StaticImageData | string;
  optionalImageAlt?: string;
}
