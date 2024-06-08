import { z } from 'zod';

export const ENV = z.enum(['development', 'testing', 'production']);
