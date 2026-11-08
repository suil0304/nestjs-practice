import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './users/users.module.js';
import { ConfigModule } from '@nestjs/config';
import validationSchema from './schema/env/index.js';
import commonConfig from './configs/common.config.js';
import { join } from 'path';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [
                `${join(import.meta.dirname, `../.env.${process.env["NODE_ENV"]}`)}`
            ],
            load: [commonConfig],
            validationSchema
        }),
        UsersModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
