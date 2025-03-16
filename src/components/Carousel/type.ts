export interface ICarouselItem {
  id: string;
  title: string;
  description: string;
  href?: string;
  imageSrc: string | undefined;
}

export interface CarouselProps {
  items: ICarouselItem[];
  currentItem: number;
  setCurrentItem: React.Dispatch<React.SetStateAction<number>>;
}
