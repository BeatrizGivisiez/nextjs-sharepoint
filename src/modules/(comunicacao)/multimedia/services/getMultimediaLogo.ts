import HTTP_CODES from "@/constants/HttpCodes";
import { MultimediaDto } from "@/dtos/MultimediaDto";
import { baseURL } from "@/util/baseURL";

export default async function getMultimediaLogo() {
  const endodedPath = "%2Fcomunicacao%2Fmultimedia";

  return fetch(`${baseURL}/MultiMediaGallery/GetLogo/${endodedPath}`, {
    method: "GET",
  })
    .then(async (response) => {
      const dto = (await response.json()) as unknown as MultimediaDto;
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
