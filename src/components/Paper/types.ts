export interface PaperPathFileProps {
  path: string;
  title: string;
}

export interface PaperLinksProps {
  title: string;
  url: string;
  whiteColor?: boolean;
  isExternal?: string;
  onClick?: () => void;
}

export interface PaperAnexoDownloadProps {
  date: string;
  nameFile: string;
  typeFile?: TypeFilePaperAnexoDownload;
  iconFile?: React.ElementType;
  file?: string;
}
export enum TypeFilePaperAnexoDownload {
  SVG = ".svg",
  PNG = ".png",
  PDF = ".pdf",
  JPGE = ".jpeg",
  JPG = ".jpg",
  CSV = ".csv",
  XLSX = ".xlsx",
  XLS = ".xls",
  PPT = ".ppt",
  ZIP = ".zip",
}

export interface IFile {
  idFiles?: string;
  titleFiles?: string;
  document?: IFile[];
  date?: string;
  typeFile?: string;
  nameFile?: string;
  file?: string;
  value?: string;
  tabsLabel?: string;
}

export interface IPaperPathFile {
  handleClick: () => void;
  file: IFile;
}

export interface PaperPesquisaProps {
  title: string;
  description: string;
  url: string;
}

export interface DocumentLibraryType {
  idFiles?: string;
  titleFiles?: string;
  document?: IFile[];
  date?: string;
  typeFile?: string;
  nameFile?: string;
  file?: string;
  value?: string;
  tabsLabel?: string;
}

export interface PaperAnexoDownloadGlobalProps {
  hasTabsPAD: boolean;
  documentLibrary: DocumentLibraryType[];
}
