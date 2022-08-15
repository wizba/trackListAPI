import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  UseInterceptors,
  CacheInterceptor,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBasicAuth, ApiBody } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Public } from './sercurity/metadata';
import { loginInfoSwagger } from './swagger/track.swagger';

@UseInterceptors(CacheInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @ApiBody({ type: loginInfoSwagger })
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.appService.login(req.user);
  }
}
