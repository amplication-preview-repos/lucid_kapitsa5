import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type ArticleUpdateInput = {
  author?: string | null;
  category?: CategoryWhereUniqueInput | null;
  content?: string | null;
  publishedAt?: Date | null;
  title?: string | null;
};
