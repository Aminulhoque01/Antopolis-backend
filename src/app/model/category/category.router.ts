import { Router } from "express";
import { CategoryController } from "./category.controller";
 
 
 

const categoryRouter = Router();


categoryRouter.post("/", CategoryController.addCategory);

 
 
 

export default categoryRouter;