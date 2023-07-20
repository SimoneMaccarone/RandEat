import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // searchQuery: string = '';
  // searchResults: any[] = [];
  APP_ID: string = '746aee35';
  APP_KEY: string = '7b2258d83d315207e9cc144eb81ef82b';
  baseURL: string = 'https://api.edamam.com/search'
  // baseURL_V2: string = 'https://api.edamam.com/api/recipes/v2'

  constructor(private http: HttpClient) { }

  searchRecipes(query: string): Observable<any> {
    const url = `${this.baseURL}?q=${query}&app_id=${this.APP_ID}&app_key=${this.APP_KEY}&from=0&to=20`;
    return this.http.get(url);
  }

}

  // getRecipe() {
  //   this.http.get<any>(this.BASE_URL_V1).pipe(
  //     map((data) => data.hits)
  //   ).subscribe(
  //     (results) => {
  //       this.searchResults = results;
  //     },
  //     (error) => {
  //       console.log("Error fetching data: ", error);
  //     }
  //   );
  // }
  // onSearch(event: Event) {
  //   event.preventDefault();
  //   this.getRecipe();
  //   // console.log(query);
  // }

  // async fetchAPI() {
  // const baseURL = `https://api.edamam.com/search?q=${this.searchQuery}&app_id=${this.APP_ID}&app_key=${this.APP_key}&from=0&to=20`;
  //   this.http.get<any>(baseURL).pipe(
  //     map((data) => data.hits)
  //   ).subscribe(
  //     (results) => {
  //       this.searchResults = results;
  //     },
  //     (error) => {
  //       console.log("Error fetching data: ", error);
  //     }
  //   );
  // }

// https://api.edamam.com/search?q=pizza&app_id=746aee35&app_key=7b2258d83d315207e9cc144eb81ef82b&from=0&to=20
