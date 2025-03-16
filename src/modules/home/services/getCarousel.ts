import HTTP_CODES from "@/constants/HttpCodes";
import { ICarouselResponse } from "../page/types";
import { baseURL } from "@/util/baseURL";

export default async function getCarousel() {
  const endodedPath = "%2F";

  return fetch(`${baseURL}/Carousel/Get/${endodedPath}`, {
    method: "GET",
  })
    .then(async (response) => {
      const dto = (await response.json()) as unknown as ICarouselResponse[];
      const data = dto.map((item, index) => ({
        title: item.title,
        description: item.description,
        href: item.link,
        imageSrc: item.image,
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
