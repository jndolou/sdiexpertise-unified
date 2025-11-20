export interface Article {
  id?: number | string;
  tag?: string;
  tags?: string[];
  title: string;
  excerpt?: string;
  description?: string;
  author: string;
  date: string;
  backgroundImage?: string;
}
