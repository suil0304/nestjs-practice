import { Injectable, NotImplementedException } from '@nestjs/common';
import { v1 } from 'uuid';
import { EmailService } from '../email/email.service.js';
import { UserInfo } from './entities/user-info.entity.js';

@Injectable()
export class UsersService {
    constructor(private readonly __emailService:EmailService) {}

    async createUser(name:string, email:string, password:string):Promise<void> {
        await this.__checkUserExists(email);
        
        const signUpVerifyToken = v1();

        await this.__saveUser(
            name,
            email,
            password,
            signUpVerifyToken
        );
    }

    async verifyEmail(signUpVerifiyToken:string):Promise<string> {
        // TODO:
        // 1. DB에서 signUpVerifyToken으로 회원 가입 처리 중인 유저가 있는지 조회, 없다면 에러 처리
        // 2. 바로 로그인 상태가 되도록 JWT 발급

        throw new NotImplementedException();
    }

    async login(email:string, password:string):Promise<string> {
        // TODO:
        // 1. email, password를 가진 유저가 존재하는지 DB에서 확인하고 없다면 에러 처리
        // 2. JWT를 발급

        throw new NotImplementedException();
    }

    async getUserInfo(userId:number):Promise<UserInfo> {
        // TODO:
        // 1. userId를 가진 유저가 존재하는지 DB에서 확인 후 없다면 에러 처리
        // 2. 조회된 데이터를 UserInfo 타입으로 응답

        throw new NotImplementedException();
    }

    private async __checkUserExists(email:string):Promise<boolean> {
        // TODO: DB 추가할 때 이어서 구현하시구요
        return false;
    }

    private async __saveUser(
        name:string,
        email:string,
        password:string,
        signUpVerifyToken:string
    ):Promise<void> {
        // TODO: DB 추가할 때 이어서 구현하세요
        await this.__sendMemberJoinEmail(email, signUpVerifyToken);
    }

    private async __sendMemberJoinEmail(email:string, signUpVerifyToken:string) {
        return this.__emailService.sendMemberJoinVerification(email, signUpVerifyToken);
    }
}
