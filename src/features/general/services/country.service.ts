import { Injectable, NotFoundException } from '@nestjs/common';
import { PaginationQueryDto } from 'src/shared/models/dto/pagination-query.dto';
import { CountryDto } from '../models/dto/country.dto';
import { CountryRepostory } from '../models/repositories/country.repository';
import { Country } from '../models/schemas/country.schema';

@Injectable()
export class CountryService {
    private serviceName: string = 'Country'

    constructor(
        private countryRepository: CountryRepostory){
    }
    
    public async getAll(): Promise<Country[]> {
        return await this.countryRepository.findAll();
    }

    public async getAllPaginated(paginationQueryDto: PaginationQueryDto): Promise<Country[]>{
        const { limit, offset } = paginationQueryDto;
        return this.countryRepository.findAllPaginated(offset, limit);
    }

    public async getById(id: string): Promise<Country> {
        const country = await this.countryRepository.findById(id);

        if (!country) {
            throw new NotFoundException(`${this.serviceName} #${id} not found`);
        }

        return country;
    }

    public async create(newCountry: CountryDto): Promise<Country> {
        return await this.countryRepository.add(newCountry);
    }

    public async update(id: string, country: CountryDto): Promise<Country> {
        return await this.countryRepository.update(id, country);
    }

    public async delete(id: string): Promise<Country>{
        return await this.countryRepository.delete(id);
    }
}