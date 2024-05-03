import { Role, UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDTO } from 'src/auth/DTOs/login.dto';
import { SignUpDTO } from 'src/auth/DTOs/signup.dto';
export declare class AuthService {
    private readonly userRepo;
    constructor(userRepo: Repository<UserEntity>);
    signUp(signUpDTO: SignUpDTO): Promise<any>;
    login(loginDTO: LoginDTO, res: Response): Promise<false | {
        status: boolean;
        userID: string;
        role: Role;
    }>;
}
