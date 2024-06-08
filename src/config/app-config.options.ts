import { z, ZodSchema } from 'zod';
import { ENV } from './app.constants';
import * as process from 'node:process';

const zodEnvSchema = z.object({
  NODE_ENV: z.string().pipe(ENV).default(ENV.enum.development),
  PORT: z.number().default(3000),
  DB_URL: z.string(),
});

export const EnvSchema = zodEnvSchema;

export const validateEnvVariables = (envSchema: ZodSchema) => {
  try {
    const validatedEnvVariables = envSchema.parse(process.env);
    console.log('Environment variables validation passed');
    return validatedEnvVariables;
  } catch (e) {
    console.error('Environment variables validation failed', e.message);
    process.exit(1);
  }
};
