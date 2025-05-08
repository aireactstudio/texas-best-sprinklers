// Define types for articles used across the site

export interface ArticleData {
  title: string;
  metaDescription: string;
  description?: string;
  heading: string;
  subheading?: string;
  content: string;
  date?: string; 
  author?: string;
  tags?: string[];
  slug?: string;
  imageUrl?: string;
  imageAlt?: string;
}
