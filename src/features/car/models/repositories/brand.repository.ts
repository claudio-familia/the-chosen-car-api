import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BrandDto } from "../dtos/brand.dto";
import { Brand } from "../schemas/brand.schema";

@Injectable()
export class BrandRepostory {
    constructor(
        @InjectModel(Brand.name) private brandModel: Model<Brand>,
    ) {}

    public async findAllPaginated(offset: number, limit: number): Promise<Brand[]> {
        return await this.brandModel.find().skip(offset).limit(limit).exec();
    }

    public async findAll(): Promise<Brand[]> {
        return await this.brandModel.find().exec();
    }

    public async findById(id: string): Promise<Brand> {
        return await this.brandModel.findOne({ _id: id }).exec();
    }
    
    public async add(entity: BrandDto): Promise<Brand> {
        const newEntity = await new this.brandModel(entity);
        return newEntity.save();
    }

    public async update(id: string, entity: BrandDto): Promise<Brand> {
        return await this.brandModel.updateOne({ _id: id }, entity);
    }

    public async delete(id: string): Promise<Brand> {
        return await this.brandModel.findOneAndRemove({ _id: id });
    }
}