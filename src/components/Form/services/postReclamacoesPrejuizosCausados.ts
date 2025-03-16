import { AddDamageComplaintRequestBody } from "@/body/AddDamageComplaintRequestBody";
import { baseURL } from "@/util/baseURL";

export default async function postReclamacoesPrejuizosCausados(
  complaintData: AddDamageComplaintRequestBody
) {
  try {
    const url = `${baseURL}/Form/AddOtherComplaint`;
    const formData = new FormData();

    Object.entries(complaintData).forEach(([key, value]) => {
      if (typeof value === "string" || typeof value === "number") {
        formData.append(key, value.toString());
      } else if (Array.isArray(value)) {
        value.forEach((file, index) => {
          formData.append(`${key}[${index}]`, file);
        });
      }
    });

    const response = await fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao adicionar reclamação");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro:", error);
    throw error;
  }
}
