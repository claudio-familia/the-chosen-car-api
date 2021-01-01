import { Injectable } from "@nestjs/common";
import { RestRepository } from "../models/rest-repository.interface";

@Injectable()
export class BaseService<T, Dto> {
    // constructor(private baseRepository: RestRepository<T, Dto>){
    constructor(private baseRepository: any){
    }

    getAll(): Promise<Dto[]> {
        return this.baseRepository.read();
    }
}