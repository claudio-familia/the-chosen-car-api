import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GENERALSCHEMAS } from 'src/shared/models/schemas/schemas';
import { CountryController } from './controllers/country.controller';
import { CountryRepostory } from './models/repositories/country.repository';
import { CountryService } from './services/country.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      ...GENERALSCHEMAS
    ])
  ],
  controllers: [CountryController],
  providers: [CountryService, CountryRepostory]
})
export class GeneralModule {}
