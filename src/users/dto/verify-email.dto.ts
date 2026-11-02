import { IsString } from "class-validator";

export class VerifyEmailDto {
    @IsString()
    readonly signUpVerifyToken:string;
}