import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './users/users.module.js';
import { ConfigModule } from '@nestjs/config';
import emailConfig from './configs/email.config.js';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [emailConfig]
        }),
        UsersModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
