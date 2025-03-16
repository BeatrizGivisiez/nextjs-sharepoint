export interface GalleryLeafletsResponse {
  value: string;
  tabsLabel: string;
  galleryDocs: GalleryLeafletsProps[];
}
export interface GalleryLeafletsProps {
  id?: number;
  photo: string | undefined;
  title: string;
  description: string;
  file?: string;
  isBackground?: boolean;
}

export interface GalleryImageButtonProps {
  id?: number;
  title: string;
  description: string;
  image: string | null;
  link: string;
  order?: number;
  contain?: boolean;
  buttonTxt?: string;
}
