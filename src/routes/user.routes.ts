import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (request, response) => {
  return response.json({ Hello: 'World' });
});

export default userRouter;
