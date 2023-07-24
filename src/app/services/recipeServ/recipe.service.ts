import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { RandomRecipeModel } from 'src/app/interfaces/random-model';
import { RecipeModel } from 'src/app/interfaces/recipe-model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // RECIPE EDAMAM API
  APP_ID: string = '746aee35';
  APP_KEY: string = '7b2258d83d315207e9cc144eb81ef82b';

  baseURL: string = 'https://api.edamam.com/api/recipes/v2'
  baseURL_RANDOM: string = 'https://www.themealdb.com/api/json/v1/1/random.php'
  baseURL_INGR: string = 'https://www.themealdb.com/api/json/v1/1/filter.php?i'

  // ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
  //🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕
  // ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

  constructor(private http: HttpClient) { }

  // SEARCH RECIPE
  searchRecipes(query: string): Observable<RecipeModel> {
    const url = `${this.baseURL}?type=public&q=${query}&app_id=${this.APP_ID}&app_key=${this.APP_KEY}&from=0&to=20`;
    return this.http.get<any>(url)
  }

  // RANDOM RECIPE
  getRandomRecipe(): Observable<RandomRecipeModel[]> {
    return this.http.get<any>(this.baseURL_RANDOM).pipe(
      switchMap(randomRecipe => {
        const meals = randomRecipe.meals;
        const getArray = [];
        getArray.push(meals);
        return getArray;
      })
    );
  }








}
