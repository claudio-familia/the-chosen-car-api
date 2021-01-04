import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class StateDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    name: string;

    @IsNotEmpty()
    @IsString()
    country: string;
    
    @IsString()
    @MaxLength(100)
    description: string;
    
    @IsNotEmpty()
    @IsString()
    longitude: string;

    @IsNotEmpty()
    @IsString()
    latitude: string;
}