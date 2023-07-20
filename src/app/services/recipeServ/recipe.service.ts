import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  searchQuery: string = '';
  searchResults: any[] = [];
  APP_ID: string = '746aee35';
  APP_key: string = '7b2258d83d315207e9cc144eb81ef82b';

  BASE_URL_V1: string = 'https://api.edamam.com/search'
  BASE_URL_V2: string = 'https://api.edamam.com/api/recipes/v2'

  constructor(private http: HttpClient) {
    // this.getRecipe();
  }

  // onSearch(event: Event) {
  //   event.preventDefault();
  //   this.fetchAPI();
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
}


// https://api.edamam.com/search?q=pizza&app_id=746aee35&app_key=7b2258d83d315207e9cc144eb81ef82b&from=0&to=20
