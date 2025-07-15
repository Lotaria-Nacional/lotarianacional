"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.News = void 0;
class News {
    id;
    title;
    image;
    description;
    createdAt;
    constructor(props) {
        this.id = props.id;
        this.title = props.title;
        this.image = props.image;
        this.description = props.description;
        this.createdAt = props.createdAt || new Date();
    }
    static create(props) {
        const { description, image, title } = props;
        if (!description || !image || !title)
            throw new Error("Todos os campos são obrigatórios.");
        return new News(props);
    }
    update(data) {
        if (data.title)
            this.title = data.title;
        if (data.image)
            this.image = data.image;
        if (data.description)
            this.description = data.description;
    }
}
exports.News = News;
//# sourceMappingURL=news.js.map