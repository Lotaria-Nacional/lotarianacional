"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAgencySchema = void 0;
const zod_1 = require("zod");
const agency_type_enum_1 = require("../../enterprise/enum/agency-type.enum");
exports.createAgencySchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "O nome da agência é obrigatório"),
    phone: zod_1.z.number(),
    latitude: zod_1.z.number(),
    longitude: zod_1.z.number(),
    type: zod_1.z.nativeEnum(agency_type_enum_1.AgencyEnum, { errorMap: () => ({ message: "O tipo da agência é obrigatório." }) }),
    location_text: zod_1.z.string().min(1, "A localização por texto é obrigatório"),
});
//# sourceMappingURL=create-agency.schema.js.map