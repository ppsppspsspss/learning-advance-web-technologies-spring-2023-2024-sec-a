import { Injectable, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role, UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'
import { LoginDTO } from 'src/auth/DTOs/login.dto';
import { v4 as uuidv4 } from 'uuid';
import { SignUpDTO } from 'src/auth/DTOs/signup.dto';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>) { }

    async signUp(signUpDTO: SignUpDTO) {

        if (signUpDTO.confirmPassword != signUpDTO.password) return "Password and confirm password do not match."

        const res = await this.userRepo.findOne({ where: { username: signUpDTO.username } })

        if (res != null) return "Username already taken."

        const newUser: UserEntity = new UserEntity()

        newUser.userID = uuidv4();
        newUser.username = signUpDTO.username
        newUser.fullname = signUpDTO.fullname
        newUser.phone = signUpDTO.phone
        newUser.email = signUpDTO.email
        newUser.role = Role.CUSTOMER

        try {
            
            newUser.salt = await bcrypt.genSalt();
            newUser.password = await bcrypt.hash(signUpDTO.password, newUser.salt);

            await this.userRepo.save(newUser)
            return true

        }
        catch(error) { return error }

    }

    async login(loginDTO: LoginDTO, @Res() res: Response) {

        const { username, password } = loginDTO
        
        const user = await this.userRepo.findOneBy({ username })

        if (user && await user.checkPassword(password)) { return {
            status: true,
            userID: user.userID,
            role: user.role
        }}
        else { return false }

    }

}
