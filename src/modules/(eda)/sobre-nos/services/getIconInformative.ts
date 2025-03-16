import HTTP_CODES from "@/constants/HttpCodes";
import { IconInformativeDto } from "@/dtos/IconInformativeDto";
import { baseURL } from "@/util/baseURL";

export default async function getIconInformative() {
  const endodedPath = "%2Feda%2Fsobre-nos";

  return fetch(`${baseURL}/Values/Get?pagePath=${endodedPath}`, {
    method: "GET",
  })
    .then(async (response) => {
      const dto = (await response.json()) as unknown as IconInformativeDto[];
      const data = dto.map((item) => ({
        employees: item.NUM_COLABORADORES,
        years: item.ANOS_CONSIGO,
        clientEnergy: item.NUM_CLIENTES,
      }));
      return data;
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
