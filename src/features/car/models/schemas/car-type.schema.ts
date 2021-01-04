import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose';

@Schema()
export class CarType extends Document {     
    @Prop({unique: true})
    name: string;
    
    @Prop()
    description: string;
    
    @Prop()
    capacity: number;
}

export const CarTypeSchema = SchemaFactory.createForClass(CarType);