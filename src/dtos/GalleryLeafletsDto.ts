export interface GalleryleafletsDto {
  value: string;
  tabsLabel?: string;
  galleryDocs?: GalleryDocs[];
}

export interface GalleryDocs {
  id?: number;
  photo?: string;
  title?: string;
  description?: string;
  file?: string;
}
