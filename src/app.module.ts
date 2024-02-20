import { Module,NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { MulterMiddleware } from './middleware/multer.middleware';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService],
})


export class AppModule implements NestModule {
  // 注册自定义中间件 解析form表单参数
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MulterMiddleware).forRoutes('*');
  }
}
