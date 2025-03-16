import HTTP_CODES from "@/constants/HttpCodes";
import { ICardOffersResponse } from "../page/types";
import { baseURL } from "@/util/baseURL";

export default async function getCardOffers() {
  const endodedPath = "%2F";

  return fetch(`${baseURL}/CardOffers/Get/${endodedPath}`, {
    method: "GET",
  })
    .then(async (response) => {
      const dto = (await response.json()) as unknown as ICardOffersResponse[];
      const data = dto.map((item) => ({
        title: item.title,
        description: item.description,
        image: item.image,
        link: item.link,
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
