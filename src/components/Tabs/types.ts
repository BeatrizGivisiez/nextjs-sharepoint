export interface TabsGalleryDownloadResponse {
  value: string;
  tabsLabel: string;
  members: TabsGalleryDownloadProps[];
}
export interface TabsGalleryDownloadProps {
  id?: number;
  photo: string | null;
  jobTitle: string;
  name: string;
  cv?: string | null;
}

export interface TabsProps {
  idTabs?: any;
  tabsLabel?: string;
  children?: React.ReactNode;
  isId: boolean;
  tabOpen?: number;
  onChange?: (event: React.SyntheticEvent, newTab: number) => void;
}

export interface TabData {
  value: string;
  tabsLabel: string;
}

export interface TabsPostsProps {
  postsList: any;
}
