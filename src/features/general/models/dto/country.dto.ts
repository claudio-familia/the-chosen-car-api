import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CountryDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    name: string;
    
    @IsString()
    @MaxLength(100)
    description: string;
    
    @IsNotEmpty()
    @IsString()
    flag: string;
}