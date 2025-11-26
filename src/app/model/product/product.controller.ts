import { NextFunction, Request, Response } from "express";
import { ProductService } from "./product.services";


const createProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.createProduct(req.body);
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};


const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProducts(req.query);

    res.status(200).json({
      success: true,
      message: "Products retrieved successfully",
      data: result,
    });

  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};








export const ProductController ={
  createProduct,
  getAllProducts,
   
}