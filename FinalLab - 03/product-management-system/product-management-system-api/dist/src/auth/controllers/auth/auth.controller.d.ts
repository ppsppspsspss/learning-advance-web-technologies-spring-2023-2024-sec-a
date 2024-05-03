import { LoginDTO } from 'src/auth/DTOs/login.dto';
import { SignUpDTO } from 'src/auth/DTOs/signup.dto';
import { AuthService } from 'src/auth/services/auth/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(signUpDTO: SignUpDTO): Promise<any>;
    login(loginDTO: LoginDTO, res: Response): Promise<false | {
        status: boolean;
        userID: string;
        role: import("../../../entities/user.entity").Role;
    }>;
}
