import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseProvider } from './database';
import { AppConfigModule } from './config/app-config.module';
import { EnvSchema, validateEnvVariables } from './config/app-config.options';

@Module({
  imports: [
    AppConfigModule,
    ConfigModule.forRoot({
      validationSchema: EnvSchema,
      validate: function () {
        return validateEnvVariables(EnvSchema);
      },
      validationOptions: {
        abortEarly: true,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseProvider],
})
export class AppModule {}
