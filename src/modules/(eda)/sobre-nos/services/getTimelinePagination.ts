import HTTP_CODES from "@/constants/HttpCodes";
import { ITimelinePaginationResponse } from "../page/types";
import { baseURL } from "@/util/baseURL";

export default async function getTimelinePagination() {
  const endodedPath = "%2Feda%2Fsobre-nos";

  return fetch(`${baseURL}/Timeline/Get/${endodedPath}`, {
    method: "GET",
  })
    .then(async (response) => {
      const dto =
        (await response.json()) as unknown as ITimelinePaginationResponse[];
      const data = dto.map((item) => ({
        id: item.title,
        year: item.title,
        description: item.description,
      }));
      return data;
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
