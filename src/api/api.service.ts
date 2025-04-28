import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GetAllDto, GetFilteredDto, GetInfoDto, MealDto, MealsResponseDto } from './dto/api.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  private readonly apiBaseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.apiBaseUrl = this.configService.get<string>('API_BASE_URL') || '';
  }

  getRecipes({ name }: GetAllDto): Observable<MealDto[]> {
    return this.httpService
      .get<MealsResponseDto>(`${this.apiBaseUrl}/search.php?s=${name || ''}`)
      .pipe(map(response => response.data.meals || []));
  }

  getFilteredRecipes({ filter_term, type }: GetFilteredDto): Observable<MealDto[]> {
    return this.httpService
      .get<MealsResponseDto>(`${this.apiBaseUrl}/filter.php?${type}=${filter_term}`)
      .pipe(map(response => response.data.meals || []));
  }

  getRecipeInfo({ id }: GetInfoDto): Observable<MealDto> {
    return this.httpService
      .get<MealDto>(`${this.apiBaseUrl}/lookup.php?i=${id}`)
      .pipe(map(response => response.data));
  }
}
