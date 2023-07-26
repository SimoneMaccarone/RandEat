import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { IngredientsModel } from 'src/app/interfaces/ingredients-model';
import { RandomRecipeModel } from 'src/app/interfaces/random-model';
import { RecipeModel } from 'src/app/interfaces/recipe-model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // SEARCH RECIPE EDAMAM API
  APP_ID: string = '746aee35';
  APP_KEY: string = '7b2258d83d315207e9cc144eb81ef82b';
  baseURL: string = 'https://api.edamam.com/api/recipes/v2'


  // INGREDIENTS RECIPE EDAMAM API
  // https://api.edamam.com/api/food-database/v2/parser?ingr={ingredient}&app_id=b9d26be2&app_key=1250ba1410896310c611d2fa2659ff72
  // https://api.edamam.com/search?q=eggs,bacon&app_id=746aee35&app_key=7b2258d83d315207e9cc144eb81ef82b

  // APP_ID_INGR: string = 'b9d26be2'
  // APP_KEY_INGR: string = '1250ba1410896310c611d2fa2659ff72'
  // baseURL_INGR: string = 'https://api.edamam.com/api/food-database/v2/parser'

  APP_ID_INGR: string = 'eeaee5a6'
  APP_KEY_INGR: string = 'a95083252ece72edbfc4f7aeb9dc6a33'
  baseURL_INGR : string= 'https://api.edamam.com/search'


  // RANDOM RECIPE API
  baseURL_RANDOM: string = 'https://www.themealdb.com/api/json/v1/1/random.php'
  // ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
  //🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕
  // ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

  constructor(private http: HttpClient) { }

  // SEARCH RECIPE        //baseURL: string = 'https://api.edamam.com/api/recipes/v2'
  searchRecipes(query: string): Observable<RecipeModel> {
    const url = `${this.baseURL}?type=public&q=${query}&app_id=${this.APP_ID}&app_key=${this.APP_KEY}&from=0&to=20`;
    return this.http.get<any>(url);
  }

  // INGREDIENTS RECIPE
  searchRecipesByIngredients(ingredients: string[]): Observable<any> {
    const joinedIngredients = ingredients.join(',');
    const url=`${this.baseURL_INGR}?q=${joinedIngredients}&app_id=${this.APP_ID_INGR}&app_key=${this.APP_KEY_INGR}`;
    return this.http.get<any>(url);
  }

  // RANDOM RECIPE        //baseURL_RANDOM: string = 'https://www.themealdb.com/api/json/v1/1/random.php'
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
