import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mongodb',
    url: 'mongodb://localhost/the-chosen-car',
    synchronize: true,
    useUnifiedTopology: true
}