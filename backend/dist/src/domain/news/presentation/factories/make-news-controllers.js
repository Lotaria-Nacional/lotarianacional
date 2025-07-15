"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeNewsController = makeNewsController;
const creat_news_controller_1 = require("../controllers/creat-news.controller");
const update_news_controller_1 = require("../controllers/update-news.controller");
const delete_news_controller_1 = require("../controllers/delete-news.controller");
const get_news_by_id_controller_1 = require("../controllers/get-news-by-id.controller");
const delete_news_useCase_1 = require("../../application/use-cases/delete-news.useCase");
const fetch_many_news_controller_1 = require("../controllers/fetch-many-news.controller");
const create_news_useCase_1 = require("../../application/use-cases/create-news.useCase");
const update_news_useCase_1 = require("../../application/use-cases/update-news.useCase");
const get_news_by_id_useCase_1 = require("../../application/use-cases/get-news-by-id.useCase");
const fetch_many_news_useCase_1 = require("../../application/use-cases/fetch-many-news.useCase");
function makeNewsController(newsRepository) {
    const createNews = new creat_news_controller_1.CreateNewsController(new create_news_useCase_1.CreateNewsUseCase(newsRepository));
    const updateNews = new update_news_controller_1.UpdateNewsController(new update_news_useCase_1.UpdateNewsUseCase(newsRepository));
    const removeNews = new delete_news_controller_1.DeleteNewsController(new delete_news_useCase_1.DeleteNewsUseCase(newsRepository));
    const fetchManyNews = new fetch_many_news_controller_1.FetchManyNewsController(new fetch_many_news_useCase_1.FetchManyNewsUseCase(newsRepository));
    const getNewsById = new get_news_by_id_controller_1.GetNewsByIdController(new get_news_by_id_useCase_1.GetNewsByIdUseCase(newsRepository));
    return {
        createNews,
        updateNews,
        removeNews,
        fetchManyNews,
        getNewsById
    };
}
//# sourceMappingURL=make-news-controllers.js.map