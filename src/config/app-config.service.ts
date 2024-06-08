import { Injectable } from '@nestjs/common';
import { ConfigService as ConfigEnv } from '@nestjs/config';
import { TConfig } from './app-config.env';

@Injectable()
export class AppConfigService extends ConfigEnv<TConfig> {
  get NODE_ENV(): string {
    return this.get('NODE_ENV');
  }

  get DB_URL(): string {
    return this.get('DB_URL');
  }

  get PORT(): string {
    return this.get('PORT');
  }
}
