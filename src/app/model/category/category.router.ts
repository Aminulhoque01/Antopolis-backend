import { Router } from "express";
import { CategoryController } from "./category.controller";
 
 
 

const categoryRouter = Router();


categoryRouter.post("/", CategoryController.addCategory);
categoryRouter.get("/", CategoryController.getCategory);

 
 
 

export default categoryRouter;