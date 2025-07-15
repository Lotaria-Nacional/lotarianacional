"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSlug = createSlug;
function createSlug(value) {
    return value
        .normalize("NFD") // separa letras de acentos
        .replace(/[\u0300-\u036f]/g, "") // remove acentos
        .replace(/[^a-zA-Z0-9\s-]/g, "") // remove símbolos e pontuação
        .trim() // remove espaços nas pontas
        .toLowerCase() // transforma em minúsculas
        .replace(/[\s_-]+/g, "-") // substitui espaços e underscores por hífens
        .replace(/^-+|-+$/g, ""); // remove hífens no início ou fim
}
//# sourceMappingURL=create-slug.js.map