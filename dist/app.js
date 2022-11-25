"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movie_routes_1 = __importDefault(require("./routes/movie.routes"));
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const db_1 = require("./config/db");
const index = (0, express_1.default)();
// Config
(0, db_1.connectDB)();
// Middleware
index.use(express_1.default.json());
index.use('/api/v1/contact', movie_routes_1.default);
index.listen(5003, () => {
    console.log('Server is running on port 5000');
});
