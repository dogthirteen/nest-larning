import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CatsService } from '../cats/cats.service';
import { Cat } from '../cats/cats.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get('/index')
  @HttpCode(200)
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post('add')
  @HttpCode(200)
  create(@Body() createCatDto: Cat) {
    this.catsService.create(createCatDto);
    return {
      code: 1,
    };
  }
}
