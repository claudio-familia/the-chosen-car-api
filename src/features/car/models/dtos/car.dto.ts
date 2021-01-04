import { IsNotEmpty, IsNumber, IsString, MaxLength, Min } from "class-validator";

export class CarDto {
    @IsNotEmpty()
    @IsString()
    brand: string;
    
    @IsString()
    @MaxLength(100)
    carModel: string;
    
    @IsNotEmpty()
    @IsNumber()
    @Min(1980)
    year: number;

    @IsNotEmpty()
    @IsNumber()
    minPrice: number;

    @IsNotEmpty()
    @IsNumber()
    maxPrice: number;
}