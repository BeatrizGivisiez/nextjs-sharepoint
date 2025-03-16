import { GalleryleafletsDto } from "@/dtos/GalleryLeafletsDto";
import { baseURL } from "@/util/baseURL";

async function getGalleryleaflets() {
  const encodedPath = "%2Fclientes%2Ffaturacao";

  try {
    const response = await fetch(`${baseURL}/Leaflet/Get/${encodedPath}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data (Status: ${response.status})`);
    }

    const dto = await response.json() as GalleryleafletsDto;
    return dto;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw new Error("Error API"); 
  }
}

export default getGalleryleaflets;
