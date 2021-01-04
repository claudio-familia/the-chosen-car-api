import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CarModelDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    name: string;
    
    @IsString()
    @MaxLength(100)
    description: string;
    
    @IsNotEmpty()
    @IsString()
    brand: string;

    @IsNotEmpty()
    @IsString()
    cartype: string;
}