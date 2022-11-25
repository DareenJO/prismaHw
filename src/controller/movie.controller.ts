import {movie } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { NextFunction, Request, Response } from 'express';
import { prisma } from '../config/db';
import {movieIdParams,getmovieNameParams,getmovieGenreParams,getmovieRatingParams} from '../zodschema/schema'


export const getMovieHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const rates = await prisma.movie.findMany();
      return res.status(200).json(rates);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Server Error !' });
    }
  };


  export const getOneRateHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.query as movieIdParams
      const movie = await prisma.movie.findUnique({
        where: { id },
      });
  
      return res.status(200).json(movie);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Server Error !' });
    }
  };
  

  export const addmovieHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const newmovie = req.body as movie;
  
      await prisma.movie.create({
        data: newmovie,
      });
      return res.status(201).json({ message: 'New movie rate added !' });
    } catch (error) {
      const prismaError = error as PrismaClientKnownRequestError;
      if (prismaError.code == 'P2002') {
        return res.status(400).json({
          message: 'rating done pefore ',
        });
      }
      return res.status(500).json({
        message: 'Server Error !',
      });
    }
  };


  export const updatemovietHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const newmovie = req.body as movie;
      const { id } = req.params as movieIdParams;
  
      await prisma.movie.update({
        where: { id },
        data: newmovie,
      });
      return res.status(200).json({ message: 'movie rate  updated' });
    } catch (error) {
      return res.status(500).json({
        message: 'Server Error !',
      });
    }
  };


  export const deletemovieHandler = async (req: Request, res: Response) => {
    try {
      const { id } = req.params as movieIdParams;
  
      await prisma.movie.delete({
        where: { id },
      });
      return res.status(200).json({ message: 'movie rate has been  Deleted !' });
    } catch (error) {
      return res.status(500).json({
        message: 'Server Error !',
      });
    }
  };



  export const getmoviename= async(res:Response,req:Request )=>{
    try{
        const movierequest =req.params as getmovieNameParams;
        const move= await prisma.movie.findFirst({
            where:{name:movierequest.name}
        })
        return res.status(200).json(move);
    }
    catch(err){
        console.log(err);
        return res.status(400).json({message:"error"})
        
    }
}

export const getmoviegenere= async(res:Response,req:Request)=>{
    try{
        const {genre}= req.params as getmovieGenreParams;
        const movieList=await prisma.movie.findMany({where:{genre: genre }})
    return res.status(200).json(movieList);
    }
    catch(error){
        console.log(error);
        return res.status(400).json(error);
    }
}

export const getmovierating= async(res:Response,req:Request)=>{
    try{
        const {rating}=req.params as unknown as getmovieRatingParams;
        const movieList= await prisma.movie.findMany({
            where:{rating:{gt:rating}}
        })
        return res.status(200).json(movieList);
    }
    catch(error){
        console.log(error);
        return res.status(400).json(error);
    }
}