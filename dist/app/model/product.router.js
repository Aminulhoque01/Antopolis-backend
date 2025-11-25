"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const router = (0, express_1.Router)();
router.post("/", product_controller_1.ProductController.createProduct);
router.get("/all", product_controller_1.ProductController.getAllProducts);
exports.default = router;
