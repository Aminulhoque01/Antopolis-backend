import { Router } from "express";
import { ProductController } from "./product.controller";
 

const router = Router();


router.post("/", ProductController.createProduct);

// router.get("/", ProductController.getAll);
// router.get("/:id", ProductController.getSingle);
// router.patch("/:id", ProductController.update);
// router.delete("/:id", ProductController.delete);

export default router;
