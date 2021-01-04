import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CarTypeDto } from '../models/dtos/cartype.dto';
import { ICarType } from '../models/interfaces/cartype.interface';
import { CarType } from '../models/schemas/cartype.schema';
import { CartypeService } from '../services/cartype.service';

@Controller('cartype')
export class CarTypeController {
    constructor(private carTypeService: CartypeService){}

    @Get()
    get(): Promise<CarType[]>{
        return this.carTypeService.getAll()
    }

    @Get(':id')
    getById(@Param('id') id: string): Promise<CarType>{
        return this.carTypeService.getById(id);
    }

    @Post()
    post(@Body() newCartype: CarTypeDto): Promise<ICarType>{
        return this.carTypeService.create(newCartype);
    }

    @Patch(':id')
    patch(@Param('id') id: string, @Body() cartype: CarTypeDto): Promise<ICarType>{
        return this.carTypeService.update(id, cartype);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<ICarType>{
        return this.carTypeService.delete(id);
    }
}
