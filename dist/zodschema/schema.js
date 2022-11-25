"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getmovieschema = exports.getgenerschema = exports.Getmoviebyname = exports.getmovieidSchema = exports.addmovieschema = void 0;
const zod_1 = require("zod");
exports.addmovieschema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string({ required_error: 'ID is required' }).min(3, 'ID length most be more than 3'),
        name: zod_1.z.string({ required_error: 'Name is reqired' }).min(3, 'Name length most be more than 3'),
        genre: zod_1.z.enum(['Drama', 'Action', 'Comedy'], { required_error: 'Type is required' }),
        rating: zod_1.z.number({ required_error: ' most be number ' }).min(1, "rate most be between 1-5").max(5, "rate most be between 1-5"),
        duration: zod_1.z.number({ required_error: 'duration  is  required' }).min(60, "must be more than 60 min"),
        createdat: zod_1.z.date({ required_error: 'you most add the date' })
    }),
});
exports.getmovieidSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string({ required_error: "id is required" })
    })
});
exports.Getmoviebyname = zod_1.z.object({
    params: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'you most add the name' }).min(2, 'movie length most be at least 2 '),
    })
});
exports.getgenerschema = zod_1.z.object({
    params: zod_1.z.object({
        genre: zod_1.z.string({ required_error: "you most have 3 genere" }),
    })
});
exports.getmovieschema = zod_1.z.object({
    params: zod_1.z.object({
        rating: zod_1.z.number({ required_error: "rating is required" }).min(1, 'minimam rating is 1').max(5, 'the maximom rating is 5'),
    })
});
