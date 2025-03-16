import { GalleryleafletsDto } from "@/dtos/GalleryLeafletsDto";
import { baseURL } from "@/util/baseURL";

export default async function getGalleryleaflets() {
  const encodedPath = "%2Fcomunicacao%2Fpublicacoes";

  try {
    const response = await fetch(`${baseURL}/Leaflet/Get/${encodedPath}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const dto = (await response.json()) as unknown as GalleryleafletsDto;
    return dto;
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    throw error;
  }
}
