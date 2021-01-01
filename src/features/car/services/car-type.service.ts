import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/shared/services/base.service';
import { CarTypeDto } from '../models/dtos/car-type.dto';
import { CarType } from '../models/entities/cat-type.entity';
import { CarTypeRepostory } from '../repositories/car-type.repository';

@Injectable()
export class CartypeService extends BaseService<CarType, CarTypeDto> {
    constructor(
        @InjectRepository(CarTypeRepostory)
        private carTypeRepository: CarTypeRepostory){
            super(carTypeRepository)
    }
}
