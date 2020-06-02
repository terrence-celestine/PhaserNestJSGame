import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { UpdateCatDto } from './update-cat.dto';
import { IsNumberString } from 'class-validator';


export class FindOneParams {
  @IsNumberString()
  id: number;
}

class ListAllEntities {
  limit: any;
}

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'this action creates a new cat';
  }

 @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
 }

 @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
 }

 @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id}cat`;
 }

 @Post(':id')
  remove(@Param('id') id: FindOneParams) {
    return `This action removes a #${id} cat`;
 }
}
