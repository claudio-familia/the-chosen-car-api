import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CountryDto } from '../models/dto/country.dto';
import { Country } from '../models/schemas/country.schema';
import { CountryService } from '../services/country.service';

@Controller('country')
export class CountryController {
    constructor(private countryService: CountryService){}

    @Get()
    get(): Promise<Country[]>{
        return this.countryService.getAll()
    }

    @Get(':id')
    getById(@Param('id') id: string): Promise<Country>{
        return this.countryService.getById(id);
    }

    @Post()
    post(@Body() newCountry: CountryDto): Promise<Country>{
        return this.countryService.create(newCountry);
    }

    @Patch(':id')
    patch(@Param('id') id: string, @Body() country: CountryDto): Promise<Country>{
        return this.countryService.update(id, country);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<Country>{
        return this.countryService.delete(id);
    }
}
