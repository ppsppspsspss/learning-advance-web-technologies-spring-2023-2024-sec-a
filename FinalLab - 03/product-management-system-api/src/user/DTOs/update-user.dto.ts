import { IsAlphanumeric,  IsEmail,  MaxLength, MinLength } from "class-validator";

export class updateUserDTO {

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

}