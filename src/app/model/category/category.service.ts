

import { Category } from "./category.model";

export const addCategory = async (name: string) => {
  const result = await Category.create({ name });
  return result;
};


export const CategoryService={
  addCategory,
}