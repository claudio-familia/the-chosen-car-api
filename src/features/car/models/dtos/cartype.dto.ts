import { IsNotEmpty, IsString, MaxLength, Min } from "class-validator";

export class CarTypeDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    name: string;
    
    @IsString()
    @MaxLength(100)
    description: string;
    
    @IsNotEmpty()
    @IsString()
    @Min(1)
    capacity: number;
}