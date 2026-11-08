import { Inject, Injectable } from '@nestjs/common';
import { type ConfigType } from '@nestjs/config';
import { createTransport, Mail } from "nodemailer";
import emailConfig from '../configs/email.config.js';

@Injectable()
export class EmailService {
    private __transporter:Mail;

    constructor(@Inject(emailConfig.KEY) private readonly __config:ConfigType<typeof emailConfig>) {
        this.__transporter = createTransport({
            service: this.__config.service,
            auth: {
                user: this.__config.auth.name,
                pass: this.__config.auth.password
            }
        });
    }

    async sendMemberJoinVerification(email:string, signUpVerifyToken:string) {
        const baseUrl = "http://localhost:3000";

        const url = `${baseUrl}/users/email-verify?signUpVerifyToken=${signUpVerifyToken}`;

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
