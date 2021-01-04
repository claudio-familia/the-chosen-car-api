import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CountryDto } from "../dto/country.dto";
import { Country } from "../schemas/country.schema";

@Injectable()
export class CountryRepostory {
    constructor(
        @InjectModel(Country.name) private countryModel: Model<Country>,
    ) {}

    public async findAllPaginated(offset: number, limit: number): Promise<Country[]> {
        return await this.countryModel.find().skip(offset).limit(limit).exec();
    }

    public async findAll(): Promise<Country[]> {
        return await this.countryModel.find().exec();
    }

    public async findById(id: string): Promise<Country> {
        return await this.countryModel.findOne({ _id: id }).exec();
    }
    
    public async add(entity: CountryDto): Promise<Country> {
        const newEntity = await new this.countryModel(entity);
        return newEntity.save();
    }

    public async update(id: string, entity: CountryDto): Promise<Country> {
        return await this.countryModel.updateOne({ _id: id }, entity);
    }

    public async delete(id: string): Promise<Country> {
        return await this.countryModel.findOneAndRemove({ _id: id });
    }
}