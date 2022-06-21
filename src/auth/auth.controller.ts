import { Controller, Get, Body, Request, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard} from '@nestjs/passport'
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth') // localhost:3000/auth
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('login') // Localhost:3000/auth/login
    async login(@Request() req){
      return req.user
    }

   /* @UseGuards(JwtAuthGuard)
    @Post('register')
    RegisterUser(@Body() usuarioObject: RegisterAuthDto){
        return this.authService.register(usuarioObject)
    }

    @Post('login') // Localhost:3000/auth/login
    async loginUse(@Body() usuarioObject: LoginAuthDto) {
      return this.authService.login(usuarioObject); 
    } */
}
