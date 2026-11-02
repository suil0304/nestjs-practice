import { Module } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { UsersController } from './users.controller.js';
import { EmailModule } from '../email/email.module.js';

@Module({
    imports: [EmailModule],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {}
