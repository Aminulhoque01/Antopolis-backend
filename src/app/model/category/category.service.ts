

import { Category } from "./category.model";


const addCategory = async (name: string) => {
  const result = await Category.create({ name });
  return result;
};

const getCategory = async()=>{
  const result = await Category.find();
  return result
}

export const CategoryService={
  addCategory,
  getCategory
}