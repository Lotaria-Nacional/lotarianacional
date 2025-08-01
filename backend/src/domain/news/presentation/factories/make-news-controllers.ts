import { CreateNewsController } from "../controllers/creat-news.controller";
import { UpdateNewsController } from "../controllers/update-news.controller";
import { DeleteNewsController } from "../controllers/delete-news.controller";
import { INewsRespository } from "../../application/interfaces/news.repository";
import { GetNewsByIdController } from "../controllers/get-news-by-id.controller";
import { DeleteNewsUseCase } from "../../application/use-cases/delete-news.useCase";
import { FetchManyNewsController } from "../controllers/fetch-many-news.controller";
import { CreateNewsUseCase } from "../../application/use-cases/create-news.useCase";
import { UpdateNewsUseCase } from "../../application/use-cases/update-news.useCase";
import { GetNewsByIdUseCase } from "../../application/use-cases/get-news-by-id.useCase";
import { FetchManyNewsUseCase } from "../../application/use-cases/fetch-many-news.useCase";

export function makeNewsController (newsRepository:INewsRespository){
    const createNews = new CreateNewsController(new CreateNewsUseCase(newsRepository))
    const updateNews = new UpdateNewsController(new UpdateNewsUseCase(newsRepository))
    const removeNews = new DeleteNewsController(new DeleteNewsUseCase(newsRepository))
    const fetchManyNews = new FetchManyNewsController(new FetchManyNewsUseCase(newsRepository))
    const getNewsById = new GetNewsByIdController(new GetNewsByIdUseCase(newsRepository))

    return {
        createNews,
        updateNews,
        removeNews,
        fetchManyNews,
        getNewsById
    }
}