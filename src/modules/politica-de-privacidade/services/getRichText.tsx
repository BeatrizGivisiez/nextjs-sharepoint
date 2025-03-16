import HTTP_CODES from "@/constants/HttpCodes";
import { RichTextDto } from "@/dtos/RichTextDto";
import { baseURL } from "@/util/baseURL";

export default async function getRichText() {
  const endodedPath = "%2Fpolitica-de-privacidade";

  return fetch(`${baseURL}/PageContent/Get/${endodedPath}`, {
    method: "GET",
  })
    .then(async (response) => {
      const dto = (await response.json()) as unknown as RichTextDto[];
      const data = dto.map((item) => ({
        richText: item.content,
      }));
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
