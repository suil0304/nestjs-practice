import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createTransport, Mail } from "nodemailer";

interface _EmailOption {
    readonly to:string;
    readonly subject:string;
    readonly html:string;
}

@Injectable()
export class EmailService {
    private __transporter:Mail;

    constructor(private readonly __configService:ConfigService) {
        this.__transporter = createTransport({
            service: "Gmail",
            auth: {
                user: this.__configService.getOrThrow("email.name"),
                pass: this.__configService.getOrThrow("email.password")
            }
        });
    }

    async sendMemberJoinVerification(email:string, signUpVerifyToken:string) {
        const baseUrl = "http://localhost:3000";

        const url = `${baseUrl}/users/email-verify?signUpVerifiyToken=${signUpVerifyToken}`;

        return this.__transporter.sendMail({
            to: email,
            subject: "가입 인증 메일",
            html: `
                <form action="${url}" method="POST">
                    <button>가입 확인</button>
                </form>
            `
        });
    }
}
