import { IProduct } from "./product.interface";
import { Product } from "./product.model";


const createProduct = async(payload: IProduct)=>{
  const result= await Product.create(payload);
  return result;
}

const getAllProducts = async (query: any) => {
  const { search, category, sort, page = 1, limit = 10 } = query;

  const filter: any = {};

  // SEARCH BY NAME
  if (search) {
    filter.name = { $regex: search.trim(), $options: "i" };
  }

  // FILTER BY CATEGORY
  if (category) {
    filter.category = category;
  }

  // SORT
  let sortOption: any = {};
  if (sort === "category") {
    sortOption.category = 1;
  } else if (sort === "name") {
    sortOption.name = 1;
  } else if (sort === "price_asc") {
    sortOption.price = 1;
  } else if (sort === "price_desc") {
    sortOption.price = -1;
  }

  // PAGINATION
  const pageNumber = Number(page);
  const limitNumber = Number(limit);
  const skip = (pageNumber - 1) * limitNumber;

  // COUNT TOTAL DOCUMENTS
  const total = await Product.countDocuments(filter);

  // MAIN QUERY
  const result = await Product.find(filter)
    .sort(sortOption)
    .skip(skip)
    .limit(limitNumber);

  return {
    total,
    page: pageNumber,
    limit: limitNumber,
    totalPages: Math.ceil(total / limitNumber),
    data: result,
  };
};

export const ProductService={
  createProduct,
  getAllProducts
}