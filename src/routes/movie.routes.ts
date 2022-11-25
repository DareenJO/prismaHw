import express from 'express';
import {
  addmovieHandler,
  deletemovieHandler,
  getMovieHandler,
  updatemovietHandler,
  getmovierating,
  getmoviegenere,
  getmoviename
} from '../controller/movie.controller';
import validate from '../middlewares/validate';
import {
  addmovieschema,
  getmovieidSchema,
  Getmoviebyname,
  getgenerschema,
  getmovieschema,
 
} from '../zodschema/schema';

const router = express.Router();

router.get('/',getMovieHandler,);
router.post('/',validate(addmovieschema),addmovieHandler);
 router.put('/:id',validate(getmovieidSchema),updatemovietHandler);
router.delete('/:id',validate,deletemovieHandler);
 router.get('/:name',getmoviename);
router.get('/:genre',getmoviegenere);
router.get('/:rating',getmovierating)

export default router;




