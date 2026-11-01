import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
    constructor(private readonly __appService:AppService) {}

    @Get()
    getHello():string {
        return this.__appService.getHello();
    }
}
