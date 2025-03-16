import { AddEnergySupplyRequestRequestBody } from "@/body/AddEnergySupplyRequestRequestBody";
import { baseURL } from "@/util/baseURL";

export default async function postPedidoDeFornecimentoDeEnergia(
  requestBody: AddEnergySupplyRequestRequestBody
) {
  try {
    const url = `${baseURL}/Form/AddEnergySupplyRequest`;

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
