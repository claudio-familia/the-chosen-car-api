import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class CarModel extends Document {     
    @Prop({unique: true})
    name: string;
    
    @Prop()
    description: string;
    
    @Prop()
    brand: string;

    @Prop()
    cartype: string;
}

export const CarModelSchema = SchemaFactory.createForClass(CarModel);