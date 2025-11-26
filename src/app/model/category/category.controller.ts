import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const addCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const result = await CategoryService.addCategory(name);

    res.status(200).json({
      success: true,
      message: "Category added successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getCategory = async(req: Request, res: Response)=>{
  try{
   const result = await CategoryService.getCategory();
    res.status(200).json({
      success: true,
      message: "Category added successfully",
      data: result,
    });

  }catch(error:any){
    res.status(500).json({success:false, message:error.message})
  }
}

export const CategoryController={
  addCategory,
  getCategory
}