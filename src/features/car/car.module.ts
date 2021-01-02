import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandController } from './controllers/brand.controller';
import { CarTypeController } from './controllers/cartype.controller';
import { CarTypeDto } from './models/dtos/car-type.dto';
import { CarTypeRepostory } from './repositories/car-type.repository';
import { CartypeService } from './services/car-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([CarTypeRepostory])],
  controllers: [BrandController, CarTypeController],
  providers: [CartypeService],
  exports: [CartypeService]
})
export class CarModule {}
