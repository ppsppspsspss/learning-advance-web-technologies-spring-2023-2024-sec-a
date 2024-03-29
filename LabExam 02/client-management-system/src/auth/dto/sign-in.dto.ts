import { IsEmail, MaxLength, MinLength } from "class-validator";


export class SignInDTO {
    @IsEmail()
    @MaxLength(50)
    @MinLength(10)
    email: string

    @MaxLength(20)
    @MinLength(8)
    password: string
}