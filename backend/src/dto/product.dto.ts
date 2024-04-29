/* eslint-disable prettier/prettier */
import {MinLength,IsNotEmpty,IsNumber} from 'class-validator'
export class ProductDto{
    @IsNotEmpty()
    categoryId?:number;
    @MinLength(5,{message:"can lon hon 5 ky tu"})
    productName?:string;
    @IsNumber()
    price?:number;


}