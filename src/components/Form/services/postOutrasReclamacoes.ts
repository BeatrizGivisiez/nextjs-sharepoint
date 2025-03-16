import { AddOtherComplaintRequestBody } from "@/body/AddOtherComplaintRequestBody";
import { baseURL } from "@/util/baseURL";

export default async function postOutrasReclamacoes(
  requestBody: AddOtherComplaintRequestBody
) {
  try {
    const url = `${baseURL}/Form/AddOtherComplaint`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error("Failed to add damage complaint");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding damage complaint:", error);
    throw new Error("Internal Server Error");
  }
}
