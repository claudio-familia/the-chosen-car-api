import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CarImageDto } from "../dtos/car-image.dto";
import { CarImage } from "../schemas/car-images.schema";

@Injectable()
export class CarImageRepostory {
    constructor(
        @InjectModel(CarImage.name) private carImageModel: Model<CarImage>,
    ) {}

    public async findAllPaginated(offset: number, limit: number): Promise<CarImage[]> {
        return await this.carImageModel.find().skip(offset).limit(limit).exec();
    }

    public async findAll(): Promise<CarImage[]> {
        return await this.carImageModel.find().exec();
    }

    public async findById(id: string): Promise<CarImage> {
        return await this.carImageModel.findOne({ _id: id }).exec();
    }
    
    public async add(entity: CarImageDto): Promise<CarImage> {
        const newEntity = new this.carImageModel(entity);
        return await newEntity.save();
    }

    public async update(id: string, entity: CarImageDto): Promise<CarImage> {
        return await this.carImageModel.updateOne({ _id: id }, entity);
    }

    public async delete(id: string): Promise<CarImage> {
        return await this.carImageModel.findOneAndRemove({ _id: id });
    }
}