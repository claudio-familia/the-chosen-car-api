import { Injectable, NotFoundException } from '@nestjs/common';
import { PaginationQueryDto } from 'src/shared/models/dto/pagination-query.dto';
import { StateDto } from '../models/dto/state.dto';
import { StateRepostory } from '../models/repositories/state.repository';
import { State } from '../models/schemas/state.schema';

@Injectable()
export class StateService {
    private serviceName: string = 'State'

    constructor(
        private stateRepositroy: StateRepostory){
    }
    
    public async getAll(): Promise<State[]> {
        return await this.stateRepositroy.findAll();
    }

    public async getAllPaginated(paginationQueryDto: PaginationQueryDto): Promise<State[]>{
        const { limit, offset } = paginationQueryDto;
        return this.stateRepositroy.findAllPaginated(offset, limit);
    }

    public async getById(id: string): Promise<State> {
        const state = await this.stateRepositroy.findById(id);

        if (!state) {
            throw new NotFoundException(`${this.serviceName} #${id} not found`);
        }

        return state;
    }

    public async create(newState: StateDto): Promise<State> {
        return await this.stateRepositroy.add(newState);
    }

    public async update(id: string, state: StateDto): Promise<State> {
        return await this.stateRepositroy.update(id, state);
    }

    public async delete(id: string): Promise<State>{
        return await this.stateRepositroy.delete(id);
    }
}