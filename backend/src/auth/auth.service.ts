import { LoginUserDto } from 'src/users/dtos/LoginUser.dto';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { encodePassword, comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<{ token: string }> {
    const hashedPassword = await encodePassword(createUserDto.password);
    const newUser = await this.usersService.createNewUser({
      ...createUserDto,
      password: hashedPassword,
    });
    const token = this.jwtService.sign({ id: newUser._id });
    return { token };
  }

  async login(loginUserDto: LoginUserDto): Promise<{ token: string }> {
    const { email, password } = loginUserDto;
    const findUser = await this.usersService.findByEmail(email);
    if (!findUser) {
      throw new UnauthorizedException('Invalid Email or Password!');
    }

    const isPasswordMatched = comparePasswords(password, findUser.password);
    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid Email or Password!');
    }
    const token = this.jwtService.sign({ id: findUser._id });
    return { token };
  }
}
