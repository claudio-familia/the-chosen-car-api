import { BaseService } from "../services/base.service";

export class BaseController<T, Dto> {
    constructor(private baseService: BaseService<T, Dto>){
    }

    get(){
        this.baseService.getAll()
    }
}