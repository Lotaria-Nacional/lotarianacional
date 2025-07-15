"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editAgencySchema = void 0;
const zod_1 = require("zod");
const agency_type_enum_1 = require("../../enterprise/enum/agency-type.enum");
exports.editAgencySchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string().optional(),
    type: zod_1.z.nativeEnum(agency_type_enum_1.AgencyEnum, { errorMap: () => ({ message: "O tipo da agência é obrigatório." }) }).optional(),
    phone: zod_1.z.number().optional(),
    latitude: zod_1.z.number().optional(),
    longitude: zod_1.z.number().optional(),
    location_text: zod_1.z.string().optional(),
});
//# sourceMappingURL=edit-agency.schema.js.map