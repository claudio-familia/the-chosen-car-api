import { ConflictException, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CarTypeDto } from "../models/dtos/car-type.dto";
import { CarType } from "../models/entities/cat-type.entity";

@EntityRepository(CarType)
export class CarTypeRepostory extends Repository<CarType> {
    read(): Promise<CarTypeDto[]> {
        return new Promise((resolve, reject) => {
            resolve([<CarType>{name: 'Honda'},<CarType>{name: 'Toyota'},]);
        });
    }
    readById(id: string): Promise<CarTypeDto> {
        throw new Error("Method not implemented.");
    }
    add(entity: CarTypeDto): Promise<CarType> {
        throw new Error("Method not implemented.");
    }
    modify(entity: CarTypeDto): Promise<CarType> {
        throw new Error("Method not implemented.");
    }
    deleteById(id: string): Promise<void> {
        throw new Error("Method not implemented."); 
    }
}