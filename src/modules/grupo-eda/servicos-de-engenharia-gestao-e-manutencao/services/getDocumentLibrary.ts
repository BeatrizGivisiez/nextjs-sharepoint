import HTTP_CODES from "@/constants/HttpCodes";
import { DocumentLibraryDto } from "@/dtos/DocumentLibraryDto";
import { parseData } from "@/util/parseData";
import { baseURL } from "@/util/baseURL";

export default async function getDocumentLibrary() {
  const endodedPath =
    "%2Fgrupo-eda%2Fservicos-de-engenharia-gestao-e-manutencao";
  const HasTabs = true;
  const HasTabsDesc = false;

  return fetch(
    `${baseURL}/DocumentLibrary/Get/${endodedPath}/${HasTabs}/${HasTabsDesc}`,
    {
      method: "GET",
    }
  )
    .then(async (response) => {
      const dto = (await response.json()) as unknown as DocumentLibraryDto[];
      const data = dto.map((document) => parseData(document));
      return data;
    })
    .catch((error) => {
      if (error.status !== HTTP_CODES.OK) {
        throw new Error("Error API");
      }
      return [];
    })
    .catch((error) => {
      console.error("Erro ao buscar dados da API:", error);
      throw error;
    })
    .catch(() => []);
}
