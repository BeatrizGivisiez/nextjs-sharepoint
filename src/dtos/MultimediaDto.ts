export interface MultimediaDto {
  value: string;
  tabsLabel: string;
  multimedia: Multimedias[];
}

export interface Multimedias {
  id: string;
  title: string;
  logo?: string | null;
  video?: string | null;
}
