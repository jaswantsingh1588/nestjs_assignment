import { Controller, Request, Post , Body, UseGuards} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @UseGuards(AuthGuard('local'))

    @Post('/login')
    async login(@Request() req: any) {
       return req.user;
    }

}