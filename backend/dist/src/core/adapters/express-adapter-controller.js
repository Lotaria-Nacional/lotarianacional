"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressAdapterController = expressAdapterController;
function expressAdapterController(controller) {
    return async (request, response) => {
        const HttpRequest = {
            body: request.body,
            file: request.file,
            params: request.params,
            query: request.query,
        };
        const httpResponse = await controller.handle(HttpRequest);
        response.status(httpResponse.statusCode).json(httpResponse.body);
    };
}
//# sourceMappingURL=express-adapter-controller.js.map