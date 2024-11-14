export interface Source {
  id: string | null;
  name: string;
}

// Define the main Article interface
export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
