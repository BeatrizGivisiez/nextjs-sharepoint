import { baseURL } from "@/util/baseURL";

export default async function getDetailsNews(newsId: any) {
  try {
    const response = await fetch(`${baseURL}/News/Get/${newsId}`);
    if (!response.ok) {
      throw new Error("Erro na requisição da API");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    throw error;
  }
}
