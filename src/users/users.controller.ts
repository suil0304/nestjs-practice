import { Controller, Post, Body, Query, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { VerifyEmailDto } from './dto/verify-email.dto.js';
import { UserLoginDto } from './dto/user-login.dto.js';
import { UserInfo } from './entities/user-info.entity.js';

@Controller('users')
export class UsersController {
    constructor(private readonly __usersService:UsersService) {}

    @Post()
    async createUser(@Body() dto:CreateUserDto):Promise<void> {
        const {
            name,
            email,
            password
        } = dto;
        
        await this.__usersService.createUser(name, email, password);
    }

    @Post("/email-verify")
    async verifyEmail(@Query() dto:VerifyEmailDto):Promise<string> {
        const {
            signUpVerifyToken
        } = dto;

        return this.__usersService.verifyEmail(signUpVerifyToken);
    }

    @Post("/login")
    async login(@Body() dto:UserLoginDto):Promise<string> {
        const {
            email,
            password
        } = dto;

        return this.__usersService.login(email, password);
    }

    @Get("/:id")
    async getUserInfo(@Param("id") userId:number):Promise<UserInfo> {
        return this.__usersService.getUserInfo(userId);
    }
}
