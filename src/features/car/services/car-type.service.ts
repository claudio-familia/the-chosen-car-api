import { Injectable, NotFoundException } from '@nestjs/common';
import { PaginationQueryDto } from 'src/shared/models/dto/pagination-query.dto';
import { CarTypeDto } from '../models/dtos/car-type.dto';
import { ICarType } from '../models/interfaces/cartype.interface';
import { CarTypeRepostory } from '../models/repositories/car-type.repository';
import { CarType } from '../models/schemas/car-type.schema';

@Injectable()
export class CartypeService {
    private serviceName: string = 'Cartype'

    constructor(
        private carTypeRepository: CarTypeRepostory){
    }
    
    public async getAll(): Promise<CarType[]> {
        return await this.carTypeRepository.findAll();
    }

    public async getAllPaginated(paginationQueryDto: PaginationQueryDto): Promise<CarType[]>{
        const { limit, offset } = paginationQueryDto;
        return this.carTypeRepository.findAllPaginated(offset, limit);
    }

    public async getById(id: string): Promise<CarType> {
        const cartype = await this.carTypeRepository.findById(id);

        if (!cartype) {
            throw new NotFoundException(`${this.serviceName} #${id} not found`);
        }

        return cartype;
    }

    public async create(newCartype: CarTypeDto): Promise<ICarType> {
        return await this.carTypeRepository.add(newCartype);
    }

    public async update(id: string, cartype: CarTypeDto): Promise<ICarType> {
        return await this.carTypeRepository.update(id, cartype);
    }

    public async delete(id: string): Promise<CarType>{
        return await this.carTypeRepository.delete(id);
    }
}