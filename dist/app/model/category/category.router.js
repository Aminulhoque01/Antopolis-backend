"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("./category.controller");
const categoryRouter = (0, express_1.Router)();
categoryRouter.post("/", category_controller_1.CategoryController.addCategory);
categoryRouter.get("/", category_controller_1.CategoryController.getCategory);
exports.default = categoryRouter;
