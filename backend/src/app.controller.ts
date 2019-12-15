import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';

import { AppService } from './app.service';
import { FormDto } from './form.dto';

@Controller('send')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  sendMail(@Body() formDto: FormDto) {
    return this.appService.sendMail(formDto);
  }
}
