import { PassportStrategy } from '@nestjs/passport'
import {Strategy, ExtractJwt} from 'passport-jwt'
import {Injectable} from '@nestjs/common';
import {JwtConstants} from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // extraer el JWT del header como poseedor de token, es el único en donde no hay que pasar parámetros así que conviene
            ignoreExpiration: false, // si te manda uno expired te manda 401
            secretOrKey: JwtConstants.secret,
        });
    }
 
    async validate(payload: any){
        return {IdUsuario: payload.sub, username: payload.username};
    }

} 