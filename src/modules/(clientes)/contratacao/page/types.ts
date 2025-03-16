export interface GalleryLeafletsDto {
  name: string;
  members: GalleryLeafletsResponseDto[];
}

export interface GalleryLeafletsResponseDto {
  id: number;
  job: string;
  name: string;
  phono: string;
  cv: string | undefined;
}
