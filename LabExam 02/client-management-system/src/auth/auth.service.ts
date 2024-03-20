import { Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role, UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './dto/user.dto';
import { SignInDTO } from './dto/sign-in.dto';
import { Response } from 'express';
import { randomUUID } from 'crypto';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>) {}

    async registration(userDto: UserDTO) {

        if(userDto.cpassword != userDto.password) return "Password and confirm password do not match."

        const res = await this.userRepo.findOne({
            where: {
                email: userDto.email
            }
        })

        if(res != null) return "There is already an account associated with this email address."

        
        const newUser: UserEntity = new UserEntity()
        newUser.fullname = userDto.fullname
        newUser.email = userDto.email
        newUser.city = userDto.city
        newUser.company = userDto.company
        newUser.country = userDto.country
        newUser.phone = userDto.phone
        newUser.role = Role.CUSTOMER
        newUser.password = userDto.password;

        this.userRepo.save(newUser)

    }

    async signin(signInDto: SignInDTO, @Res() res: Response){
        const {email, password} = signInDto
        const user = await this.userRepo.findOneBy({
            email,
        })

        if(user && await user.checkPassword(password)){
            res.cookie('auth', randomUUID(), {
                maxAge: 99999999999 //expire time
            })
            return {
                status : "Login successful",
                role: Role[user.role]
            }
        }
        else {
            return "Invalid login credentials"
        }
        
    }
}