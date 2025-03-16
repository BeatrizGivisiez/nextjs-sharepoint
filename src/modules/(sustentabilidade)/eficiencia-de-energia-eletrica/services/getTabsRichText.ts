import HTTP_CODES from "@/constants/HttpCodes";
import { TabsRichTextDto } from "@/dtos/TabsRichTextDto";
import { baseURL } from "@/util/baseURL";

export default async function getTabsRichText() {
  const endodedPath = "%2Fsustentabilidade%2Feficiencia-de-energia-eletrica";

  return fetch(`${baseURL}/TabsRichText/Get/${endodedPath}`, {
    method: "GET",
  })
    .then(async (response) => {
      const dto = (await response.json()) as unknown as TabsRichTextDto;
      return dto;
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
