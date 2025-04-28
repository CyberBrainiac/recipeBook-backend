import { Type } from 'class-transformer';
import {
  IsArray,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';

export class GetAllDto {
  @IsOptional()
  @IsString()
  name?: string;
}

export class GetFilteredDto {
  @IsString()
  type: 'i' | 'a' | 'c';
  @IsString()
  filter_term: string;
}

export class GetInfoDto {
  @IsString()
  id: string;
}

class IngredientDto {
  @IsString()
  @IsOptional()
  strIngredient?: string;

  @IsString()
  @IsOptional()
  strMeasure?: string;
}

export class MealDto {
  @IsString()
  idMeal: string;

  @IsString()
  strMeal: string;

  @IsString()
  @IsOptional()
  strMealAlternate?: string | null;

  @IsString()
  strCategory: string;

  @IsString()
  strArea: string;

  @IsString()
  strInstructions: string;

  @IsUrl()
  strMealThumb: string;

  @IsString()
  @IsOptional()
  strTags?: string;

  @IsUrl()
  @IsOptional()
  strYoutube?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IngredientDto)
  ingredients: IngredientDto[];

  @IsString()
  @IsOptional()
  strSource?: string | null;

  @IsString()
  @IsOptional()
  strImageSource?: string | null;

  @IsString()
  @IsOptional()
  strCreativeCommonsConfirmed?: string | null;

  @IsString()
  @IsOptional()
  dateModified?: string | null;
}

export class MealsResponseDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MealDto)
  meals: MealDto[];
}
