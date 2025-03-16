import HTTP_CODES from "@/constants/HttpCodes";
import { GalleryImageButtonDto } from "@/dtos/GalleryImageButtonDto";
import { baseURL } from "@/util/baseURL";

export default async function getGalleryImageButton() {
  const endodedPath = "%2Fsustentabilidade%2Fqualidade-ambiente-e-seguranca";

  return fetch(`${baseURL}/GalleryImage/Get/${endodedPath}`, {
    method: "GET",
  })
    .then(async (response) => {
      const dto = (await response.json()) as unknown as GalleryImageButtonDto;
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
