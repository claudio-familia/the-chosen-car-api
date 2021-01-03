import { Injectable } from "@nestjs/common";
import { CarTypeDto } from "../dtos/cartype.dto";
import { CarType } from "../schemas/cartype.entity";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class CarTypeRepostory {
    constructor(
        @InjectModel(CarType.name) private carTypeModel: Model<CarType>,
    ) {}

    public async findAllPaginated(offset: number, limit: number): Promise<CarType[]> {
        return await this.carTypeModel.find().skip(offset).limit(limit).exec();
    }

    public async findAll(): Promise<CarType[]> {
        return await this.carTypeModel.find().exec();
    }

    public async findById(id: string): Promise<CarType> {
        return await this.carTypeModel.findOne({ _id: id }).exec();
    }
    
    public async add(entity: CarTypeDto): Promise<CarType> {
        const newEntity = await new this.carTypeModel(entity);
        return newEntity.save();
    }

    public async update(id: string, entity: CarTypeDto): Promise<CarType> {
        return await this.carTypeModel.updateOne({ _id: id }, entity);
    }

    public async delete(id: string): Promise<CarType> {
        return await this.carTypeModel.findOneAndRemove({ _id: id });
    }
}