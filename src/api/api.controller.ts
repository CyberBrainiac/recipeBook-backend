import { Controller, Get, Query } from '@nestjs/common';
import { ApiService } from './api.service';
import { GetAllDto, GetFilteredDto, GetInfoDto } from './dto/api.dto';

@Controller('api/recipes')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('/getAll')
  async findAll(@Query() query: GetAllDto) {
    return this.apiService.getRecipes(query);
  }

  @Get('/getFiltered')
  async findFiltered(@Query() query: GetFilteredDto) {
    return this.apiService.getFilteredRecipes(query);
  }

  @Get('/getInfo')
  async findInfo(@Query() query: GetInfoDto) {
    return this.apiService.getRecipeInfo(query);
  }
}
