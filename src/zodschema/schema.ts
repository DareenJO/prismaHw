import { z, TypeOf } from 'zod';


export const addmovieschema = z.object({
  body: z.object({

    id : z.string({required_error: 'ID is required'}).min(3, 'ID length most be more than 3'),

        name: z.string({required_error: 'Name is reqired'}).min(3, 'Name length most be more than 3'),

      genre: z.enum(['Drama', 'Action', 'Comedy'], {required_error: 'Type is required'}),
        
      rating: z.number({required_error: ' most be number '}).min(1,"rate most be between 1-5").max(5,"rate most be between 1-5"),

      duration: z.number({required_error: 'duration  is  required'}).min(60,"must be more than 60 min"),
      createdat: z.date({required_error:'you most add the date'})
  

  }),
});
          
export const getmovieidSchema=z.object({
  params:z.object({
      id:z.string({required_error:"id is required"})
  })
})

export const Getmoviebyname=z.object({
  params:z.object({
      name:z.string({required_error:'you most add the name'}).min(2,'movie length most be at least 2 '),
  })
})
export const getgenerschema=z.object({
  params:z.object({
      genre:z.string({required_error:"you most have 3 genere"}),
  })
})

export const getmovieschema=z.object({
  params:z.object({
      rating:z.number({required_error:"rating is required"}).min(1,'minimam rating is 1').max(5,'the maximom rating is 5'),
  })
})

export type MovieSchemaType = TypeOf<typeof addmovieschema>['body'];
export type movieIdParams=TypeOf<typeof getmovieidSchema>['params'];
export type getmovieNameParams=TypeOf <typeof Getmoviebyname>['params'];
export type getmovieGenreParams=TypeOf<typeof getgenerschema> ['params'];
export type getmovieRatingParams=TypeOf<typeof getmovieschema>['params'];

