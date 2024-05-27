import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/User.schema';
import { UpdateUserDto } from './dtos/UpdateUser.dto';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { encodePassword, comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async createNewUser(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    if (!createdUser) throw new HttpException('User Not Created...', 400);
    return createdUser.save();
  }

  async findById(id: string) {
    const user = await this.userModel.findById(id);
    if (!user) throw new HttpException('User Not Found', 404);
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.userModel.findOne({ email });
    if (!user) throw new HttpException('User Not Found', 404);
    return user;
  }

  async updateById(id: string, updateUserDto: UpdateUserDto) {
    const { name, avatarUrl, currentPassword, newPassword, newPassword_re } =
      updateUserDto;
    if (!updateUserDto.newPassword) {
      return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
    }
    const user = await this.findById(id);
    if (!comparePasswords(currentPassword, user.password)) {
      throw new HttpException('Old Password Incorrect', 400);
    }
    if (newPassword !== newPassword_re) {
      throw new HttpException('Two Passwords Not Same', 400);
    }
    const hashedNewPassword = await encodePassword(newPassword);
    const update = { name, avatarUrl, password: hashedNewPassword };
    return this.userModel.findByIdAndUpdate(id, update, { new: true });
  }

  async deleteById(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id);
  }
}
