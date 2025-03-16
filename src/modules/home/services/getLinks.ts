import HTTP_CODES from "@/constants/HttpCodes";
import { LIST_ICON } from "@/constants/ListIcon";
import { ILinksResponse } from "../page/types";
import { baseURL } from "@/util/baseURL";

export default async function getLinks() {
  const endodedPath = "%2F";

  return fetch(`${baseURL}/Link/Get/${endodedPath}`, {
    method: "GET",
  })
    .then(async (response) => {
      const dto = (await response.json()) as unknown as ILinksResponse[];
      const data = dto.map((item, index) => ({
        name: item.title,
        icon: LIST_ICON[index].icon,
        link: item.linkPath,
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
