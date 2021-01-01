import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandController } from './controllers/brand.controller';
import { CartypeController } from './controllers/cartype.controller';
import { CarTypeRepostory } from './repositories/car-type.repository';
import { CartypeService } from './services/car-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([CarTypeRepostory])],
  controllers: [BrandController, CartypeController],
  providers: [CartypeService],
  exports: [CartypeService]
})
export class CarModule {}
