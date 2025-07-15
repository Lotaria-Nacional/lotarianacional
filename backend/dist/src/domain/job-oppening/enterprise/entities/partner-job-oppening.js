"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnerJobOppening = void 0;
const create_slug_1 = require("../../../../shared/utils/create-slug");
const base_entity_1 = require("../../../../core/@entity/base-entity");
class PartnerJobOppening extends base_entity_1.BaseEntity {
    static create(props, id) {
        return new PartnerJobOppening({
            ...props,
            slug: (0, create_slug_1.createSlug)(props.location),
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
        if (props.type !== undefined)
            this._props.type = props.type;
        if (props.title !== undefined)
            this._props.title = props.title;
        if (props.location !== undefined) {
            this._props.location = props.location;
            this._props.slug = (0, create_slug_1.createSlug)(props.location);
        }
        ;
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
    get location() {
        return this._props.location;
    }
    set location(value) {
        this._props.location = value;
    }
    get type() {
        return this._props.type;
    }
    set type(value) {
        this._props.type = value;
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
exports.PartnerJobOppening = PartnerJobOppening;
//# sourceMappingURL=partner-job-oppening.js.map