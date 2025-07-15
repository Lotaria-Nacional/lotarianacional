"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobOppening = void 0;
const create_slug_1 = require("../../../../shared/utils/create-slug");
const base_entity_1 = require("../../../../core/@entity/base-entity");
class JobOppening extends base_entity_1.BaseEntity {
    static create(props, id) {
        return new JobOppening({
            ...props,
            slug: (0, create_slug_1.createSlug)(props.department),
            department: props.department,
            createdAt: props.createdAt ?? new Date(),
        }, id);
    }
    update(props) {
        if (props.responsabilities !== undefined)
            this._props.responsabilities = props.responsabilities;
        if (props.requirements !== undefined)
            this._props.requirements = props.requirements;
        if (props.quantity !== undefined)
            this._props.quantity = props.quantity;
        if (props.description !== undefined)
            this._props.description = props.description;
        if (props.title !== undefined)
            this._props.title = props.title;
        if (props.department !== undefined) {
            this._props.department = props.department;
            this._props.slug = (0, create_slug_1.createSlug)(props.department);
        }
    }
    get title() {
        return this._props.title;
    }
    set title(value) {
        this._props.title = value;
    }
    get quantity() {
        return this._props.quantity;
    }
    set quantity(value) {
        this._props.quantity = value;
    }
    get department() {
        return this._props.department;
    }
    set department(value) {
        this._props.department = value;
    }
    get description() {
        return this._props.description;
    }
    set description(value) {
        this._props.description = value;
    }
    get requirements() {
        return this._props.requirements;
    }
    set requirements(value) {
        this._props.requirements = value;
    }
    get responsabilities() {
        return this._props.responsabilities;
    }
    set responsabilities(value) {
        this._props.responsabilities = value;
    }
    get slug() {
        return this._props.slug;
    }
    set slug(value) {
        this._props.slug = value;
    }
    get createdAt() {
        return this._props.createdAt;
    }
}
exports.JobOppening = JobOppening;
//# sourceMappingURL=job-oppening.js.map