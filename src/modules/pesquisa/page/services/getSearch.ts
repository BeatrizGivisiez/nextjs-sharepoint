import HTTP_CODES from "@/constants/HttpCodes";
import { baseURL } from "@/util/baseURL";

export default async function getSearch(searchTerm: string) {
  return fetch(`${baseURL}/Search/Get/${searchTerm}`, {
    method: "GET",
  })
    .then(async (response) => {
      const dto = await response.json();
      return dto;
    })
    .catch((error) => {
      if (error.status !== HTTP_CODES.OK) {
        throw new Error("Error on Get API");
      }
      return [];
    })
    .catch((error) => {
      console.error("Erro ao buscar dados da API:", error);
      throw error;
    })
    .catch(() => []);
}
