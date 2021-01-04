import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StateDto } from '../models/dto/state.dto';
import { State } from '../models/schemas/state.schema';
import { StateService } from '../services/state.service';

@Controller('state')
export class StateController {
    constructor(private stateService: StateService){}

    @Get()
    get(): Promise<State[]>{
        return this.stateService.getAll()
    }

    @Get(':id')
    getById(@Param('id') id: string): Promise<State>{
        return this.stateService.getById(id);
    }

    @Post()
    post(@Body() newState: StateDto): Promise<State>{
        return this.stateService.create(newState);
    }

    @Patch(':id')
    patch(@Param('id') id: string, @Body() state: StateDto): Promise<State>{
        return this.stateService.update(id, state);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<State>{
        return this.stateService.delete(id);
    }
}
