import { RichTextDto } from "@/dtos/RichTextDto";
import { baseURL } from "@/util/baseURL";

export default async function getRichText() {
  const encodedPath = "%2Fgrupo-eda";

  try {
    const response = await fetch(`${baseURL}/PageContent/Get/${encodedPath}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error API");
    }

    const dto = (await response.json()) as RichTextDto[];
    const data = dto.map((item) => ({
      richText: item.content,
    }));
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    return [];
  }
}
