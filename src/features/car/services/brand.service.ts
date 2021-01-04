import { Injectable, NotFoundException } from '@nestjs/common';
import { PaginationQueryDto } from 'src/shared/models/dto/pagination-query.dto';
import { BrandDto } from '../models/dtos/brand.dto';
import { BrandRepostory } from '../models/repositories/brand.repository';
import { Brand } from '../models/schemas/brand.schema';

@Injectable()
export class BrandService {
    private serviceName: string = 'Brand'

    constructor(
        private brandRepository: BrandRepostory){
    }
    
    public async getAll(): Promise<Brand[]> {
        return await this.brandRepository.findAll();
    }

    public async getAllPaginated(paginationQueryDto: PaginationQueryDto): Promise<Brand[]>{
        const { limit, offset } = paginationQueryDto;
        return this.brandRepository.findAllPaginated(offset, limit);
    }

    public async getById(id: string): Promise<Brand> {
        const brand = await this.brandRepository.findById(id);

        if (!brand) {
            throw new NotFoundException(`${this.serviceName} #${id} not found`);
        }

        return brand;
    }

    public async create(newBrand: BrandDto): Promise<Brand> {
        return await this.brandRepository.add(newBrand);
    }

    public async update(id: string, brand: BrandDto): Promise<Brand> {
        return await this.brandRepository.update(id, brand);
    }

    public async delete(id: string): Promise<Brand>{
        return await this.brandRepository.delete(id);
    }
}