"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banner = void 0;
class Banner {
    constructor(props) {
        this.desktop_banner_1 = props.desktop_banner_1;
        this.desktop_banner_2 = props.desktop_banner_2;
        this.desktop_banner_3 = props.desktop_banner_3;
        this.mobile_banner_1 = props.mobile_banner_1;
        this.mobile_banner_2 = props.mobile_banner_2;
        this.mobile_banner_3 = props.mobile_banner_3;
    }
    static create(props) {
        return new Banner(props);
    }
    update(data) {
        if (data.desktop_banner_1)
            this.desktop_banner_1 = data.desktop_banner_1;
        if (data.desktop_banner_2)
            this.desktop_banner_2 = data.desktop_banner_2;
        if (data.desktop_banner_3)
            this.desktop_banner_3 = data.desktop_banner_3;
        if (data.mobile_banner_1)
            this.mobile_banner_1 = data.mobile_banner_1;
        if (data.mobile_banner_2)
            this.mobile_banner_2 = data.mobile_banner_2;
        if (data.mobile_banner_3)
            this.mobile_banner_3 = data.mobile_banner_3;
    }
}
exports.Banner = Banner;
