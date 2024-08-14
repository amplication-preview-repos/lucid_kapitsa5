import { Category } from "../category/Category";

export type Article = {
  author: string | null;
  category?: Category | null;
  content: string | null;
  createdAt: Date;
  id: string;
  publishedAt: Date | null;
  title: string | null;
  updatedAt: Date;
};
