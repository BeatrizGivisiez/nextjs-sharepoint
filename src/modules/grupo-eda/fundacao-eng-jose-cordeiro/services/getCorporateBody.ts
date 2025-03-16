import HTTP_CODES from "@/constants/HttpCodes";
import {
  CorporateBodyDto,
  CorporateCategory,
  Member,
} from "@/dtos/CorporateBodyDto";
import { baseURL } from "@/util/baseURL";

export default async function getCorporateBody() {
  const endodedPath = "%2Fgrupo-eda%2Ffundacao-eng-jose-cordeiro";

  return fetch(`${baseURL}/CorporateBody/Get/${endodedPath}`, {
    method: "GET",
  })
    .then(async (response) => {
      const dto = (await response.json()) as unknown as CorporateBodyDto;

      const data = dto.corporateCategories.map(
        (category: CorporateCategory) => ({
          value: category.value,
          tabsLabel: category.tabsLabel,
          members: category.members.map((member: Member) => ({
            id: member.id,
            jobTitle: member.jobTitle,
            name: member.name,
            photo: member.photo || "",
            cv: member.cv || undefined,
          })),
        })
      );
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
