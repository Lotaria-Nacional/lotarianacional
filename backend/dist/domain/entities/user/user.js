"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(props) {
        this.id = props.id;
        this.email = props.email;
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.password = props.password;
        this.profilePic = props.profilePic;
        this.createdAt = props.createdAt ?? new Date();
    }
    static create(props) {
        if (!props.email || !props.firstName || !props.lastName || !props.password) {
            throw new Error("Missing required fields");
        }
        return new User(props);
    }
}
exports.User = User;
