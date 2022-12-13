import { Controller, Get } from '@nestjs/common';
import path from 'path';
import { AppService } from './app.service';

@Controller("Prefixo")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("produtos")
  getHello(): string {
    return this.appService.getHello();
  }
}
