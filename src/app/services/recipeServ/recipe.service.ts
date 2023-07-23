import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { RandomRecipeModel } from 'src/app/interfaces/random-model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // RECIPE EDAMAM API
  APP_ID: string = '746aee35';
  APP_KEY: string = '7b2258d83d315207e9cc144eb81ef82b';
  baseURL: string = 'https://api.edamam.com/api/recipes/v2'
  // baseURL: string = 'https://api.edamam.com/search'
  //x POSTAMAN (watermelon) = https://api.edamam.com/api/recipes/v2?type=public&q=watermelon&app_id=746aee35&app_key=7b2258d83d315207e9cc144eb81ef82b&from=0&to=20

  // ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
  // RANDOM RECIPE API // GET https://www.themealdb.com/api/json/v1/1/random.php

  baseURL_RANDOM : string = 'https://www.themealdb.com/api/json/v1/1/random.php'


  constructor(private http: HttpClient) { }

  // SEARCH RECIPE
  searchRecipes(query: string): Observable<any> {
    const url = `${this.baseURL}?type=public&q=${query}&app_id=${this.APP_ID}&app_key=${this.APP_KEY}&from=0&to=20`;
    return this.http.get(url);
    // MANCA IL NEXT & PREV page
  }


  // RANDOM RECIPE
  // GET https://www.themealdb.com/api/json/v1/1/random.php

  getRandomRecipe(): Observable<any>{
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
