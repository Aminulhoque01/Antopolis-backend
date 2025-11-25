import { Router } from "express";
import { ProductController } from "./product.controller";
 

const router = Router();


router.post("/", ProductController.createProduct);

router.get("/all", ProductController.getAllProducts);
 

export default router;
