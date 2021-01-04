import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GENERALREPOSITORIES } from 'src/shared/models/repositories/repositories';
import { GENERALSCHEMAS } from 'src/shared/models/schemas/schemas';
import { GENERALSERVICES } from 'src/shared/services/services';
import { CountryController } from './controllers/country.controller';
import { StateController } from './controllers/state.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      ...GENERALSCHEMAS
    ])
  ],
  controllers: [CountryController, StateController],
  providers: [
    ...GENERALSERVICES,
    ...GENERALREPOSITORIES
  ]
})
export class GeneralModule {}
