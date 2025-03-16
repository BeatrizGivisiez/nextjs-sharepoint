import HTTP_CODES from "@/constants/HttpCodes";
import { IStepVerticalInformativeResponse } from "../page/types";
import { baseURL } from "@/util/baseURL";

export default async function getStepVerticalInformative() {
  const endodedPath = "%2Fclientes%2Ffalta-de-energia";

  return fetch(`${baseURL}/Step/Get/${endodedPath}`, {
    method: "GET",
  })
    .then(async (response) => {
      const dto =
        (await response.json()) as unknown as IStepVerticalInformativeResponse[];
      const data = dto.map((item) => ({
        stepIndex: item.index,
        stepTitle: item.title,
        stepDescription: item.description,
      }));
      return data;
    })
    .catch((error) => {
      if (error.status !== HTTP_CODES.OK) {
        throw new Error("Error na API");
      }
      return [];
    })
    .catch((error) => {
      console.error("Erro ao buscar dados da API:", error);
      throw error;
    })
    .catch(() => []);
}
