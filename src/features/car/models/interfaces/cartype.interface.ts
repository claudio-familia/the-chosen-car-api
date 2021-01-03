import { Document } from 'mongoose';

export interface ICarType extends Document {
  readonly name: string;
  readonly description: string;
  readonly capacity: number;
}