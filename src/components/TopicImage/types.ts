import { StaticImageData } from "next/image";

export interface TopicImageProps {
  backgroundImg: StaticImageData | string;
  backgroundImgAlt: string;
  children: React.ReactNode;
}

export interface TopicProps {
  title: string;
  description: string;
  icon: React.ElementType;
}
