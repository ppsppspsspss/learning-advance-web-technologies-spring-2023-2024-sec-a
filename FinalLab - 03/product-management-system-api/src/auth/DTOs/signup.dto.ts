import { IsAlphanumeric, IsEmail, IsNumber, MaxLength, MinLength } from "class-validator";

export class SignUpDTO {

    userID: string

    @MaxLength(50)
    @MinLength(4)
    username: string

    @MaxLength(30)
    @MinLength(3)
    fullname: string

    @IsAlphanumeric()
    @MaxLength(15)
    @MinLength(11)
    phone: string

    @IsEmail()
    email: string

    @MaxLength(8)
    @MinLength(4)
    password: string

    @MaxLength(8)
    @MinLength(4)
    confirmPassword: string

}