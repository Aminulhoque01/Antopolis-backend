"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_services_1 = require("./product.services");
const createProduct = async (req, res) => {
    try {
        const result = await product_services_1.ProductService.createProduct(req.body);
        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
const getAllProducts = async (req, res) => {
    try {
        const result = await product_services_1.ProductService.getAllProducts(req.query);
        res.status(200).json({
            success: true,
            message: "Products retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
exports.ProductController = {
    createProduct,
    getAllProducts
};
