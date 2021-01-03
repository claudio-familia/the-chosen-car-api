import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from "./jwt-payload.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        //@InjectRepository(UserRepostory)
        private userRepository: any
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'TopSecretArea51'
        });        
    }

    async validate(payload: JwtPayload){
        const { username } = payload;

        const user = {};

        if(!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}