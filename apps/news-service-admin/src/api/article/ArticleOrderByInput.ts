import { SortOrder } from "../../util/SortOrder";

export type ArticleOrderByInput = {
  author?: SortOrder;
  categoryId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  publishedAt?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
