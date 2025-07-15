"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const repositories_1 = require("../../../../main/container/repositories");
const make_news_controllers_1 = require("../factories/make-news-controllers");
const express_adapter_controller_1 = require("../../../../core/adapters/express-adapter-controller");
const multer_middleware_1 = require("../../../../core/middlewares/multer.middleware");
const newsRouter = (0, express_1.Router)();
const { createNews, fetchManyNews, getNewsById, removeNews, updateNews } = (0, make_news_controllers_1.makeNewsController)(repositories_1.newsRepository);
newsRouter.post("/", multer_middleware_1.upload.single("image"), (0, express_adapter_controller_1.expressAdapterController)(createNews));
newsRouter.get("/", (0, express_adapter_controller_1.expressAdapterController)(fetchManyNews));
newsRouter.get("/:id", (0, express_adapter_controller_1.expressAdapterController)(getNewsById));
newsRouter.put("/:id", multer_middleware_1.upload.single("image"), (0, express_adapter_controller_1.expressAdapterController)(updateNews));
newsRouter.delete("/:id", (0, express_adapter_controller_1.expressAdapterController)(removeNews));
exports.default = newsRouter;
//# sourceMappingURL=news.routes.js.map