import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class State extends Document {     
    @Prop({unique: true})
    name: string;
    
    @Prop()
    description: string;

    @Prop()
    country: string;
    
    @Prop()
    latitude: string;

    @Prop()
    longitude: string;
}

export const StateSchema = SchemaFactory.createForClass(State);