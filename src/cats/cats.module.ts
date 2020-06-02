import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';

// @ts-ignore
@Module({
  controllers: [CatsController]
})
export class CatsModule {

}