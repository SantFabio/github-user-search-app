export default function useDate(date: string): string | undefined {
    // Cria uma instância de Date a partir da string "date"
    if (!date) {
        // Retorne uma string vazia ou algum outro valor padrão
        return "Invalid date";
      }
    const dateInstancy = new Date(date);
  
    // Converte a data para o mês abreviado em inglês
    const formattedMonth = dateInstancy.toLocaleString('en-US', { month: 'short' });
    const formattedData: string = `${date.substring(8,10)} ${formattedMonth} ${date.substring(0,4)}`
    return formattedData;
  }
  