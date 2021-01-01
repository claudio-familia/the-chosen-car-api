import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { CarModule } from './features/car/car.module';
import { UserModule } from './features/user/user.module';
import ENTITIES from './shared/models/entities/entities';
import { BaseService } from './shared/services/base.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    ...typeOrmConfig,
    entities: [
      ...ENTITIES
    ]
  }),CarModule, UserModule],
  providers: [BaseService],
  exports:[BaseService]
})
export class AppModule {}
