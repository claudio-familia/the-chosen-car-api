import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class CarImage extends Document {     
    @Prop()
    car: string;
    
    @Prop()
    frontOutside: string;
    
    @Prop()
    rightLateralOutside: string;

    @Prop()
    leftLateralOutside: string;

    @Prop()
    backOutside: string;

    @Prop()
    frontInside: string;

    @Prop()
    frontDoorInside: string;

    @Prop()
    backDoorInside: string;
}

export const CarImageSchema = SchemaFactory.createForClass(CarImage);