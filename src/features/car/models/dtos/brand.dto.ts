import { IsNotEmpty, IsString, MaxLength, Min } from "class-validator";
import { Country } from "src/features/general/models/schemas/country.schema";

export class BrandDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    name: string;
    
    @IsString()
    @MaxLength(100)
    description: string;
    
    @IsNotEmpty()
    country: Country;
}