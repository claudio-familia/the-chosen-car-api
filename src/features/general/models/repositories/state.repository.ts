import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { StateDto } from "../dto/state.dto";
import { State } from "../schemas/state.schema";

@Injectable()
export class StateRepostory {
    constructor(
        @InjectModel(State.name) private stateModel: Model<State>,
    ) {}

    public async findAllPaginated(offset: number, limit: number): Promise<State[]> {
        return await this.stateModel.find().skip(offset).limit(limit).exec();
    }

    public async findAll(): Promise<State[]> {
        return await this.stateModel.find().exec();
    }

    public async findById(id: string): Promise<State> {
        return await this.stateModel.findOne({ _id: id }).exec();
    }
    
    public async add(entity: StateDto): Promise<State> {
        const newEntity = await new this.stateModel(entity);
        return newEntity.save();
    }

    public async update(id: string, entity: StateDto): Promise<State> {
        return await this.stateModel.updateOne({ _id: id }, entity);
    }

    public async delete(id: string): Promise<State> {
        return await this.stateModel.findOneAndRemove({ _id: id });
    }
}