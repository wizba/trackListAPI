import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
  constructor(private jwtService: JwtService) {}
  getHello(): string {
    return 'Hello World! 22 333';
  }

  async validateUser(username: string, password: string): Promise<any> {
    const currentUser = 'admin';

    if (username === currentUser) {
      return {
        username,
        password,
      };
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.password };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
