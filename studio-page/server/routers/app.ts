import { createRouter } from '../create-router';
import { authRouter } from './auth';

export const appRouter = createRouter().merge('auth.', authRouter);

export type AppRouter = typeof appRouter;
