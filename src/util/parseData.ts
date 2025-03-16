import { IFile } from "@/components/Paper/types";
import { DocumentLibraryDto } from "@/dtos/DocumentLibraryDto";

export function parseData(item: DocumentLibraryDto): IFile {
  const data = {} as IFile;

  data.date = item.Date;
  data.document = item.Document?.map((doc: DocumentLibraryDto) =>
    parseData(doc)
  );
  data.file = item.File;
  data.idFiles = item.IdFiles;
  data.nameFile = item.NameFile;
  data.tabsLabel = item.TabsLabel;
  data.titleFiles = item.TitleFiles;
  data.typeFile = item.TypeFile;
  data.value = item.Value;

  return data;
}
