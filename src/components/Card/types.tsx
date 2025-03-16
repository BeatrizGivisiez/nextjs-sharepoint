export interface CardProps {
  title: string;
  path?: string;
}

export interface CardIconDescriptionProps {
  icon: React.ElementType;
  title: string;
  description?: string;
  href: string;
}

export interface CardOffersProps {
  title: string;
  description: string;
  image: string | undefined;
  link: string;
}

export interface NewsItem {
  id: number;
  title: string;
  content: string;
}
export interface CardNewsProps {
  apiData: NewsItem[]; // Define o tipo dos dados da API
  loading: boolean; // Define o tipo do estado de carregamento
  error: string | null; // Define o tipo do estado de erro
  fetchData?: () => Promise<void>; // Define o tipo da função para buscar dados da API
  handleClick: (id: number) => void; // Define o tipo da função para manipular cliques
}
