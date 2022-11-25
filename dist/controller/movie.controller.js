"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getmovierating = exports.getmoviegenere = exports.getmoviename = exports.deletemovieHandler = exports.updatemovietHandler = exports.addmovieHandler = exports.getOneRateHandler = exports.getMovieHandler = void 0;
const db_1 = require("../config/db");
const getMovieHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rates = yield db_1.prisma.movie.findMany();
        return res.status(200).json(rates);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server Error !' });
    }
});
exports.getMovieHandler = getMovieHandler;
const getOneRateHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        const movie = yield db_1.prisma.movie.findUnique({
            where: { id },
        });
        return res.status(200).json(movie);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server Error !' });
    }
});
exports.getOneRateHandler = getOneRateHandler;
const addmovieHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newmovie = req.body;
        yield db_1.prisma.movie.create({
            data: newmovie,
        });
        return res.status(201).json({ message: 'New movie rate added !' });
    }
    catch (error) {
        const prismaError = error;
        if (prismaError.code == 'P2002') {
            return res.status(400).json({
                message: 'rating done pefore ',
            });
        }
        return res.status(500).json({
            message: 'Server Error !',
        });
    }
});
exports.addmovieHandler = addmovieHandler;
const updatemovietHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newmovie = req.body;
        const { id } = req.params;
        yield db_1.prisma.movie.update({
            where: { id },
            data: newmovie,
        });
        return res.status(200).json({ message: 'movie rate  updated' });
    }
    catch (error) {
        return res.status(500).json({
            message: 'Server Error !',
        });
    }
});
exports.updatemovietHandler = updatemovietHandler;
const deletemovieHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield db_1.prisma.movie.delete({
            where: { id },
        });
        return res.status(200).json({ message: 'movie rate has been  Deleted !' });
    }
    catch (error) {
        return res.status(500).json({
            message: 'Server Error !',
        });
    }
});
exports.deletemovieHandler = deletemovieHandler;
const getmoviename = (res, req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movierequest = req.params;
        const move = yield db_1.prisma.movie.findFirst({
            where: { name: movierequest.name }
        });
        return res.status(200).json(move);
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({ message: "error" });
    }
});
exports.getmoviename = getmoviename;
const getmoviegenere = (res, req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { genre } = req.params;
        const movieList = yield db_1.prisma.movie.findMany({ where: { genre: genre } });
        return res.status(200).json(movieList);
    }
    catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
});
exports.getmoviegenere = getmoviegenere;
const getmovierating = (res, req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rating } = req.params;
        const movieList = yield db_1.prisma.movie.findMany({
            where: { rating: { gt: rating } }
        });
        return res.status(200).json(movieList);
    }
    catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
});
exports.getmovierating = getmovierating;
