import { baseURL } from "@/util/baseURL";

export default async function getCardNews(page:number, pageSize: number) {
  try {
    const response = await fetch(`${baseURL}/News/GetAll?page=${page}&pagesize=${pageSize}`);
    
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
