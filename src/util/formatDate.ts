export function formatDate(isoDate: string): string {
  // Converte a string ISO em um objeto Date
  const date = new Date(isoDate);

  // Extrai o dia, mês e ano do objeto Date
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // retorna o mês de 0 a 11
  const year = date.getFullYear();

  // Retorna a data formatada no formato DD/MM/YYYY
  return `${day}/${month}/${year}`;
}
