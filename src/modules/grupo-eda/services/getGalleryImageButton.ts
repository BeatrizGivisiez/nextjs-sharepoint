import { GalleryImageButtonDto } from "@/dtos/GalleryImageButtonDto";
import { baseURL } from "@/util/baseURL";

export default async function getGalleryImageButton(): Promise<
  GalleryImageButtonDto[]
> {
  const encodedPath = "%2Fgrupo-eda";

  try {
    const response = await fetch(`${baseURL}/GalleryImage/Get/${encodedPath}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error API");
    }

    const dto = (await response.json()) as GalleryImageButtonDto[];
    return dto;
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    return [];
  }
}
