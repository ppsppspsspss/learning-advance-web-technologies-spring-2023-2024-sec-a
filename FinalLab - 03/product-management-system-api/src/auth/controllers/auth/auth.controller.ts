import { Body, Controller, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginDTO } from 'src/auth/DTOs/login.dto';
import { SignUpDTO } from 'src/auth/DTOs/signup.dto';
import { AuthService } from 'src/auth/services/auth/auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('/sign-up')
    @UsePipes(ValidationPipe)
    async signUp(@Body() signUpDTO: SignUpDTO){

        return await this.authService.signUp(signUpDTO);

    }

    @Post('/login')
    @UsePipes(ValidationPipe)
    async login(@Body() loginDTO: LoginDTO, @Res({passthrough: true}) res: Response){

        return this.authService.login(loginDTO, res);
        
    }

}
