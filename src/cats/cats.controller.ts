import {
  Body,
  Controller,
  Get,
  HostParam,
  HttpCode,
  Ip,
  Post,
  Query,
  Req,
  Headers,
  Param,
} from '@nestjs/common';

export class query {
  id: string;
}

@Controller('cats/breed')
export class CatsController {
  @Get(':name/:age')
  findAll(
    @Param() params: any,
    @Query() query: query,
    @Req() request: Request,
  ): string {
    console.log('query', query);
    console.log('Param', params);
    return 'this is cats Get';
  }

  @Post()
  @HttpCode(200)
  create(
    @Body() body: any,
    @Ip() ip: any,
    @HostParam() host: any,
    @Headers() headers: any,
  ): object {
    /**
     * 解析表单请求
     * npm install --save @nestjs/platform-express multer
    */
    console.log('ip :>> ', ip);
    console.log('host :>> ', host);
    console.log('body :>> ', body);
    console.log('headers :>> ', headers);
    return {
      code: 1,
      data: 'this is cats Post',
    };
  }
}
