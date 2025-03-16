import { GalleryleafletsDto } from "@/dtos/GalleryLeafletsDto";
import { baseURL } from "@/util/baseURL";

async function getGalleryleaflets() {
  const endodedPath = "%2Fclientes%2Fcontratacao";

  try {
    const response = await fetch(`${baseURL}/Leaflet/Get/${endodedPath}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from API");
    }

    const dto = (await response.json()) as GalleryleafletsDto[];
    return dto;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
}

export default getGalleryleaflets;
