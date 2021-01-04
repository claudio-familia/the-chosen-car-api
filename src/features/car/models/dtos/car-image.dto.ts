import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CarImageDto {
    @IsNotEmpty()
    @IsString()
    car: string;
    
    @IsString()
    frontOutside: string;

    @IsString()
    rightLateralOutside: string;

    @IsString()
    leftLateralOutside: string;

    @IsString()
    backOutside: string;

    @IsString()
    frontInside: string;

    @IsString()
    frontDoorInside: string;

    @IsString()
    backDoorInside: string;
}