/* eslint-disable prettier/prettier */
import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from "@nestjs/core";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    public constructor( private readonly reflector: Reflector ) {
        super();
    }
  canActivate(context: ExecutionContext) {
    
    const isPublic = this.reflector.get<boolean>( "isPublic", context.getHandler() );
    if (isPublic) {
        return true;
    }

    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    // You can throw an exception based on either "info" or "err" arguments
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
