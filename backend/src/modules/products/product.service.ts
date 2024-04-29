/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ProductDto } from "src/dto/product.dto";
import { Product } from "src/models/product.model";

@Injectable()
export class ProductService {
   private products: Product[]=[
    {id:1,categoryId:2,price:80000,productName:"Keyboard"},
    {id:2,categoryId:2,price:80000,productName:"sfs"},
   


   ]
    getProducts():Product[]{
        return this.products;
    }

   
    createProducts(productDto:ProductDto):Product {
        const product:Product={

            id:Math.random(),
            ...productDto,
        };
        this.products.push(product);
        return productDto;
    }

    
    detailProduct(id: number):Product{
        return this.products.find(item=>item.id===Number(id));
    }
    
    
    updateProduct():string{
        return "put";
    }
   
    deleteProduct():string{
        return 'delete';
    }



}

