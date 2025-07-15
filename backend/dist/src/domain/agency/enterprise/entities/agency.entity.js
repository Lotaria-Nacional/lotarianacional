"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agency = void 0;
class Agency {
    id;
    name;
    phone;
    latitude;
    longitude;
    type;
    location_text;
    createdAt;
    constructor(props) {
        this.id = props.id;
        this.type = props.type;
        this.name = props.name;
        this.phone = props.phone;
        this.latitude = props.latitude;
        this.longitude = props.longitude;
        this.location_text = props.location_text;
        this.createdAt = props.createdAt ?? new Date();
    }
    static create(props) {
        this.validateProps(props);
        return new Agency(props);
    }
    static validateProps(props) {
        if (!props.location_text)
            throw new Error("A localização da agência é obrigatória.");
        if (props.latitude == null)
            throw new Error("A latitude deve estar entre -90 e 90.");
        if (props.longitude == null)
            throw new Error("A longitude deve estar entre -180 e 180.");
        if (!props.name)
            throw new Error("O nome da agência é obrigatório.");
        if (!props.phone)
            throw new Error("O número de telefone é obrigatório.");
    }
    update(data) {
        if (data.name)
            this.name = data.name;
        if (data.type)
            this.type = data.type;
        if (data.phone)
            this.phone = data.phone;
        if (data.latitude)
            this.latitude = data.latitude;
        if (data.longitude)
            this.longitude = data.longitude;
        if (data.location_text)
            this.location_text = data.location_text;
    }
}
exports.Agency = Agency;
//# sourceMappingURL=agency.entity.js.map