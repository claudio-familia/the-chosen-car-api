import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Car extends Document {     
    @Prop()
    carModel: string;
    
    @Prop()
    brand: string;
    
    @Prop()
    year: number;

    @Prop()
    minPrice: number;

    @Prop()
    maxPrice: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);