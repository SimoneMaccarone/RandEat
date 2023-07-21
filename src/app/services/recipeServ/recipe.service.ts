import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  APP_ID: string = '746aee35';
  APP_KEY: string = '7b2258d83d315207e9cc144eb81ef82b';
  baseURL: string = 'https://api.edamam.com/api/recipes/v2'
  // baseURL: string = 'https://api.edamam.com/search'

  //x POSTAMAN (watermelon) = https://api.edamam.com/api/recipes/v2?type=public&q=watermelon&app_id=746aee35&app_key=7b2258d83d315207e9cc144eb81ef82b&from=0&to=20

  constructor(private http: HttpClient) { }

  // SEARCH RECIPE
  searchRecipes(query: string): Observable<any> {
    const url = `${this.baseURL}?type=public&q=${query}&app_id=${this.APP_ID}&app_key=${this.APP_KEY}&from=0&to=20`;
    return this.http.get(url);
    // MANCA IL NEXT & PREV page
  }


  //RANDOM RECIPE
  // getRandomElement(): Observable<any> {
  //   // Perform a random search query
  //   const randomQuery = Math.random().toString(36).substring(7); // Generate a random query string
  //   return this.http.get<any>(`${this.baseURL}?q=${randomQuery}`);
  // }

}
