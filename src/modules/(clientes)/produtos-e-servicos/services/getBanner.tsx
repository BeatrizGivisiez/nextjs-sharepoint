import HTTP_CODES from "@/constants/HttpCodes";
import { IBannerResponse } from "../page/types";
import { baseURL } from "@/util/baseURL";

export default async function getBanner() {
  const endodedPath = "%2Fclientes%2Fprodutos-e-servicos";

  return fetch(`${baseURL}/Banner/Get/${endodedPath}`, {
    method: "GET",
  })
    .then(async (response) => {
      const dto = (await response.json()) as unknown as IBannerResponse[];
      const data = dto.map((item) => ({
        title: item.title,
        description: item.description,
        link: item.link,
        imageSrc: item.image,
      }));
      return data;
    })
    .catch((error) => {
      if (error.status !== HTTP_CODES.OK) {
        throw new Error("Error na API");
      }
      return [];
    })
    .catch((error) => {
      console.error("Erro ao buscar dados da API:", error);
      throw error;
    })
    .catch(() => []);
}
