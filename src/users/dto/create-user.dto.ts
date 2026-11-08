import { BadRequestException } from "@nestjs/common";
import { Transform } from "class-transformer";
import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @Transform((params) => {
        return (params.value as string).trim();
    })
    @MinLength(2)
    @MaxLength(30)
    readonly name:string;

    @IsString()
    @IsEmail()
    @MaxLength(60)
    readonly email:string;

    @IsString()
    @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/)
    @Transform(({ value, obj }) => {
        const password:string = value;
        if(password.includes((obj as CreateUserDto).name.trim())) {
            throw new BadRequestException(``);
        }

        return password.trim();
    })
    readonly password:string;
}