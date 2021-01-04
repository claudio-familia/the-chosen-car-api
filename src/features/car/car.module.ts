import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CARREPOSITORIES, REPOSITORIES } from 'src/shared/models/repositories/repositories';
import { CARSCHEMAS, SCHEMAS } from 'src/shared/models/schemas/schemas';
import { CARSERVICES, SERVICES } from 'src/shared/services/services';
import { BrandController } from './controllers/brand.controller';
import { CarTypeController } from './controllers/car-type.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      ...CARSCHEMAS
    ]),
  ],
  controllers: [BrandController, CarTypeController],
  providers: [
    ...CARREPOSITORIES,
    ...CARSERVICES
  ]
})
export class CarModule {}
