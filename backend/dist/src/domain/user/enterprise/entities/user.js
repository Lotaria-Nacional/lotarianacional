"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    id;
    email;
    firstName;
    role;
    lastName;
    password;
    profilePic;
    createdAt;
    constructor(props) {
        this.id = props.id;
        this.email = props.email;
        this.firstName = props.firstName;
        this.role = props.role;
        this.lastName = props.lastName;
        this.password = props.password;
        this.profilePic = props.profilePic;
        this.createdAt = props.createdAt ?? new Date();
    }
    static create(props) {
        return new User(props);
    }
    update(data) {
        if (data.role)
            this.role = data.role;
        if (data.email)
            this.email = data.email;
        if (data.profilePic)
            this.profilePic = data.role;
        if (data.lastName)
            this.lastName = data.lastName;
        if (data.firstName)
            this.firstName = data.firstName;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map