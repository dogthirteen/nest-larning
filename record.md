## Nestjs Record

#### 一、命令相关

- ​	脚手架创建项目

  ```js
  npm i -g @nestjs/cli //安装脚手架
  nest -v //查看版本  是否安装成功
  nest create [name] //使用脚手架创建项目
  nest g controller [name] //新建controller模板
  nest g service [name] //新增service模板
  ```
  

#### 二、常用装饰器

| 装饰器名称                | `express对应功能                    |
| ------------------------- | ----------------------------------- |
| `@Response(), @Res()`     | `res`                               |
| `@Next()`                 | `next`                              |
| `@Session()`              | `req.session`                       |
| `@Param(key?: string)`    | `req.params` / `req.params[key]`    |
| `@Body(key?: string)`     | `req.body` / `req.body[key]`        |
| `@Query(key?: string)`    | `req.query` / `req.query[key]`      |
| `@Headers(name?: string)` | `req.headers` / `req.headers[name]` |
| `@Ip()`                   | `req.ip`                            |
| `@HostParam()`            | `req.hosts`                         |
| @Request(), @Req()        | req                                 |