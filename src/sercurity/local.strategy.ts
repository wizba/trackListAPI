/* eslint-disable prettier/prettier */
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private appService: AppService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    console.log(username);
    const user = this.appService.validateUser(username,password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
