"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const category_model_1 = require("./category.model");
const addCategory = async (name) => {
    const result = await category_model_1.Category.create({ name });
    return result;
};
const getCategory = async () => {
    const result = await category_model_1.Category.find();
    return result;
};
exports.CategoryService = {
    addCategory,
    getCategory
};
