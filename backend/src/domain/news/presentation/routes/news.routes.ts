import { Router } from "express";
import { newsRepository } from "../../../../main/container/repositories";
import { makeNewsController } from "../factories/make-news-controllers";
import { expressAdapterController } from "../../../../core/adapters/express-adapter-controller";
import { upload } from "../../../../core/middlewares/multer.middleware";

const newsRouter = Router();

const { createNews, fetchManyNews, getNewsById, removeNews, updateNews } = makeNewsController(newsRepository);

newsRouter.post("/", upload.single("image"), expressAdapterController(createNews));
newsRouter.get("/", expressAdapterController(fetchManyNews));
newsRouter.get("/:id", expressAdapterController(getNewsById));
newsRouter.put("/:id", upload.single("image"), expressAdapterController(updateNews));
newsRouter.delete("/:id", expressAdapterController(removeNews));

export default newsRouter;
