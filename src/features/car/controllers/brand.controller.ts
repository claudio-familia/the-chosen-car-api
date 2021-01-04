import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BrandDto } from '../models/dtos/brand.dto';
import { Brand } from '../models/schemas/brand.schema';
import { BrandService } from '../services/brand.service';

@Controller('brand')
export class BrandController {
    constructor(private brandService: BrandService){}

    @Get()
    get(): Promise<Brand[]>{
        return this.brandService.getAll()
    }

    @Get(':id')
    getById(@Param('id') id: string): Promise<Brand>{
        return this.brandService.getById(id);
    }

    @Post()
    post(@Body() newBrand: BrandDto): Promise<Brand>{
        return this.brandService.create(newBrand);
    }

    @Patch(':id')
    patch(@Param('id') id: string, @Body() brand: BrandDto): Promise<Brand>{
        return this.brandService.update(id, brand);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<Brand>{
        return this.brandService.delete(id);
    }
}
