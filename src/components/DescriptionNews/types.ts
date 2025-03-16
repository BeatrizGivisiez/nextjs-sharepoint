export interface DescriptionNewsProps {
  id?: string | number;
  dateNews: string;
  title: string;
  description: string;
  img: string | undefined;
  children?: React.ReactNode;
}
