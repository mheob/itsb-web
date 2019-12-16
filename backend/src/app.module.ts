import { Module } from '@nestjs/common';
import { MailerModule } from '@nest-modules/mailer';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { auth } from './config/auth';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: auth.host,
          auth: {
            user: auth.user,
            pass: auth.pass,
          },
        },
        defaults: {
          from: '"Webmail über IT Service Böhm" <ab@its-boehm.de>',
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
