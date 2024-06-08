import { Provider } from '@nestjs/common';
import { Client } from 'pg';
import { drizzle, NodePgQueryResultHKT } from 'drizzle-orm/node-postgres';
import { PgDatabase } from 'drizzle-orm/pg-core';
import { AppConfigService } from '../config/app-config.service';

export type DB_CONNECTION = PgDatabase<
  NodePgQueryResultHKT,
  Record<string, never>
>;

const dbConnect = async (
  appConfig: AppConfigService,
): Promise<DB_CONNECTION> => {
  try {
    const client = new Client({ connectionString: appConfig.DB_URL });
    await client.connect();
    return drizzle(client);
  } catch (err) {
    console.error(err);
  }
};

export const DatabaseProvider: Provider = {
  provide: 'DATABASE_CONNECTION',
  useFactory: dbConnect,
  inject: [AppConfigService],
};
