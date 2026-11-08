import { BadRequestException } from "@nestjs/common";
import { Transform } from "class-transformer";
import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { NotIn } from "../../decorators/not-in.decorator.js";

export class CreateUserDto {
    @IsString()
    @Transform((params) => {
        return (params.value as string).trim();
    })
    @NotIn("password", { message: "password는 name과 같은 문자열을 포함할 수 없습니다." })
    @MinLength(2)
    @MaxLength(30)
    readonly name:string;

    @IsString()
    @IsEmail()
    @MaxLength(60)
    readonly email:string;

    @IsString()
    @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/)
    @Transform((params) => {
        return (params.value as string).trim();
    })
    readonly password:string;
}