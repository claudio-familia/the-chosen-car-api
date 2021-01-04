import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CarDto } from "../dtos/car.dto";
import { CarModel } from "../schemas/car-model.schema";
import { Car } from "../schemas/car.schema";

@Injectable()
export class CarRepostory {
    constructor(
        @InjectModel(CarModel.name) private carModel: Model<Car>,
    ) {}

    public async findAllPaginated(offset: number, limit: number): Promise<Car[]> {
        return await this.carModel.find().skip(offset).limit(limit).exec();
    }

    public async findAll(): Promise<Car[]> {
        return await this.carModel.find().exec();
    }

    public async findById(id: string): Promise<Car> {
        return await this.carModel.findOne({ _id: id }).exec();
    }
    
    public async add(entity: CarDto): Promise<Car> {
        const newEntity = new this.carModel(entity);
        return await newEntity.save();
    }

    public async update(id: string, entity: CarDto): Promise<Car> {
        return await this.carModel.updateOne({ _id: id }, entity);
    }

    public async delete(id: string): Promise<Car> {
        return await this.carModel.findOneAndRemove({ _id: id });
    }
}