import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarType } from '../models/entities/cat-type.entity';
import { CarTypeRepostory } from '../repositories/car-type.repository';

@Injectable()
export class CartypeService {
    constructor(
        @InjectRepository(CarTypeRepostory)
        private carTypeRepository: CarTypeRepostory){
    }
}
