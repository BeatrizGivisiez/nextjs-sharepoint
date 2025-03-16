export interface RecommendedNewsProps {
  apiData: NewsItem[];
}

export interface NewsItem {
  id: number;
  title: string;
  content: string;
}
