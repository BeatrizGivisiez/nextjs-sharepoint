import HTTP_CODES from "@/constants/HttpCodes";
import { PowerBIDto } from "@/dtos/PowerBIDto";
import { baseURL } from "@/util/baseURL";

export default async function getPowerBI() {
  const endodedPath =
    "%2Fregulacao%2Fqualidade-de-servico%2Findicadores-de-continuidade-de-servico";

  return fetch(`${baseURL}/PowerBIGraphic/Get/${endodedPath}`, {
    method: "GET",
  })
    .then(async (response) => {
      const dto = (await response.json()) as unknown as PowerBIDto[];
      const data = dto.map((item) => ({
        src: item.graphicUrl,
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
