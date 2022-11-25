import { z, TypeOf } from 'zod';


export const schemaManage = z.object({
  body: z.object({

    id : z.string({required_error: 'ID is required'}).min(3, 'ID length most be more than 3'),

        username: z.string({required_error: 'userName is reqired'}),

      password: z.number({required_error: ' most be number '}),
        
      email: z.string({required_error: ' most be string  '}),

      role: z.enum(['Admin', 'User'], {required_error: 'role is required'}),
      joining: z.string({required_error:'you most add the joining year'}),
      age: z.number({required_error: ' most be number and required'})
  

  }),
});


export type ةشىشلثSchemaType = TypeOf<typeof schemaManage>['body'];