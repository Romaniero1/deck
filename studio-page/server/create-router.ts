import * as trpc from '@trpc/server';

import type { MyContextType } from './context';

export const createRouter = () => trpc.router<MyContextType>();
