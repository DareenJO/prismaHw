"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaManage = void 0;
const zod_1 = require("zod");
exports.schemaManage = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string({ required_error: 'ID is required' }).min(3, 'ID length most be more than 3'),
        username: zod_1.z.string({ required_error: 'userName is reqired' }),
        password: zod_1.z.number({ required_error: ' most be number ' }),
        email: zod_1.z.string({ required_error: ' most be string  ' }),
        role: zod_1.z.enum(['Admin', 'User'], { required_error: 'role is required' }),
        joining: zod_1.z.string({ required_error: 'you most add the joining year' }),
        age: zod_1.z.number({ required_error: ' most be number and required' })
    }),
});
