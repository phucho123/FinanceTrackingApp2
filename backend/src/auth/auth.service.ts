/* eslint-disable prettier/prettier */
import { LoginDto } from './dto/login.dto';

import { SignUpDto } from './dto/signup.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './schemas/account.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor( @InjectModel(Account.name)
    private accountModel:Model<Account>,
    private jwtService:JwtService
){}
    async signUp(signUpDto:SignUpDto ):Promise<{token:string}>{
        const {name,email,password}=signUpDto;
        const hashedPassword=await bcrypt.hash(password,10);
        const account =await this.accountModel.create({
            name,
            email,
            password:hashedPassword,

        });
        const token=this.jwtService.sign({id:account._id});
        return {token}
    }

    async login(loginDto:LoginDto) :Promise<{token:string}>{
        const {email,password}=loginDto;
        const account =await this.accountModel.findOne({email});
        if(!account){
            throw new UnauthorizedException('Invalid Email or Password!');

        }

        const isPasswordMatched=await bcrypt.compare(password,account.password);
        if(!isPasswordMatched){

            throw new UnauthorizedException('Invalid Email or Password!');
        }
        const token=this.jwtService.sign({id:account._id});
        return {token}


    }
}
