import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { REPOSITORIES } from 'src/shared/models/repositories/repositories';
import { CARSCHEMAS, SCHEMAS } from 'src/shared/models/schemas/schemas';
import { SERVICES } from 'src/shared/services/services';
import { BrandController } from './controllers/brand.controller';
import { CarTypeController } from './controllers/cartype.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      ...CARSCHEMAS
    ]),
  ],
  controllers: [BrandController, CarTypeController],
  providers: [
    ...REPOSITORIES,
    ...SERVICES
  ]
})
export class CarModule {}
