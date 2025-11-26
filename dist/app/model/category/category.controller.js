"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_service_1 = require("./category.service");
const addCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const result = await category_service_1.CategoryService.addCategory(name);
        res.status(200).json({
            success: true,
            message: "Category added successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
const getCategory = async (req, res) => {
    try {
        const result = await category_service_1.CategoryService.getCategory();
        res.status(200).json({
            success: true,
            message: "Category added successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
exports.CategoryController = {
    addCategory,
    getCategory
};
