import { AccordionDto } from "@/dtos/AccordionDto";
import HTTP_CODES from "@/constants/HttpCodes";
import { baseURL } from "@/util/baseURL";

export default async function getAccordion() {
  const endodedPath = "%2Fsustentabilidade%2Frotulagem-energetica";

  return fetch(`${baseURL}/Accordion/Get/${endodedPath}`, {
    method: "GET",
  })
    .then(async (response) => {
      const dto = (await response.json()) as unknown as AccordionDto;
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
