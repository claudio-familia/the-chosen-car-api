import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarModule } from './features/car/car.module';
import { UserModule } from './features/user/user.module';
import { databaseConfig } from './config/database.config';
import { GeneralModule } from './features/general/general.module';

@Module({
  imports: [
    MongooseModule.forRoot(databaseConfig.url),
    CarModule, 
    UserModule, GeneralModule
  ],
  providers: [],
  exports:[]
})
export class AppModule {}
