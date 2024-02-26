import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
const multer = require('multer'); //引入multer模块

@Injectable()
export class MulterMiddleware implements NestMiddleware {
  // 创建一个multer实例
  private upload = multer();

  async use(req: Request, res: Response, next: Function) {
    // 解析表单数据请求体
    this.upload.none()(req, res, (err: any) => {
      if (err) {
        console.log(err);
        return res.status(500).send('Unable to parse form data');
      }
      next();
    });
  }
}
