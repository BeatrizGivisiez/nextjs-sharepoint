export interface MultimediaResponse {
  value: string;
  tabsLabel: string;
  multimedia: MultimediaProps[];
}
export interface MultimediaProps {
  id?: string;
  logo?: string | null;
  title: string;
  video?: string | null;
  poster?: string | undefined;
}
