import 'dotenv/config';
import type { Config } from 'drizzle-kit';

const config: Config = {
  schema: './src/database/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DB_URL,
  },
};

export default config;
