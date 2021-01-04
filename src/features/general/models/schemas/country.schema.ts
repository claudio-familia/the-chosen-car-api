import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose';

@Schema()
export class Country extends Document {     
    @Prop({unique: true})
    name: string;
    
    @Prop()
    description: string;
    
    @Prop()
    flag: string;
}

export const CountrySchema = SchemaFactory.createForClass(Country);