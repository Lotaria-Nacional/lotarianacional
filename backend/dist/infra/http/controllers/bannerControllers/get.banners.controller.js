"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBannersController = void 0;
class GetBannersController {
    constructor(getBannersUseCase) {
        this.getBannersUseCase = getBannersUseCase;
    }
    async handle(req, res) {
        const banners = await this.getBannersUseCase.execute();
        return res.status(200).json(banners);
    }
}
exports.GetBannersController = GetBannersController;
