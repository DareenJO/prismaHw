"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movie_controller_1 = require("../controller/movie.controller");
const validate_1 = __importDefault(require("../middlewares/validate"));
const schema_1 = require("../zodschema/schema");
const router = express_1.default.Router();
router.get('/', movie_controller_1.getMovieHandler);
router.post('/', (0, validate_1.default)(schema_1.addmovieschema), movie_controller_1.addmovieHandler);
router.put('/:id', (0, validate_1.default)(schema_1.getmovieidSchema), movie_controller_1.updatemovietHandler);
router.delete('/:id', validate_1.default, movie_controller_1.deletemovieHandler);
router.get('/:name', movie_controller_1.getmoviename);
router.get('/:genre', movie_controller_1.getmoviegenere);
router.get('/:rating', movie_controller_1.getmovierating);
exports.default = router;
