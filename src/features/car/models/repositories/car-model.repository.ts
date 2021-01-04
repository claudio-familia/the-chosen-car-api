import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CarModelDto } from "../dtos/car-model.dto";
import { CarModel } from "../schemas/car-model.schema";

@Injectable()
export class CarModelRepostory {
    constructor(
        @InjectModel(CarModel.name) private carmodelModel: Model<CarModel>,
    ) {}

    public async findAllPaginated(offset: number, limit: number): Promise<CarModel[]> {
        return await this.carmodelModel.find().skip(offset).limit(limit).exec();
    }

    public async findAll(): Promise<CarModel[]> {
        return await this.carmodelModel.find().exec();
    }

    public async findById(id: string): Promise<CarModel> {
        return await this.carmodelModel.findOne({ _id: id }).exec();
    }
    
    public async add(entity: CarModelDto): Promise<CarModel> {
        const newEntity = new this.carmodelModel(entity);
        return await newEntity.save();
    }

    public async update(id: string, entity: CarModelDto): Promise<CarModel> {
        return await this.carmodelModel.updateOne({ _id: id }, entity);
    }

    public async delete(id: string): Promise<CarModel> {
        return await this.carmodelModel.findOneAndRemove({ _id: id });
    }
}