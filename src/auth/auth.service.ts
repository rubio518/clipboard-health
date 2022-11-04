import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  testUsers = [
    {
      id: 1,
      username: 'test',
      pass: 'secret',
      role: 'admin',
    },
  ];

  async validateUser(username: string, pass: string): Promise<any> {
    const user = this.testUsers.find((testUser) => {
      return username === testUser.username && pass === testUser.pass;
    });
    if (user) {
      const { pass, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
