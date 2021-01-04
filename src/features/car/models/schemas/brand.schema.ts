import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { Country, CountrySchema } from "src/features/general/models/schemas/country.schema";

@Schema()
export class Brand extends Document {     
    @Prop({unique: true})
    name: string;
    
    @Prop()
    description: string;
    
    @Prop({type: CountrySchema})
    country: Country;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);