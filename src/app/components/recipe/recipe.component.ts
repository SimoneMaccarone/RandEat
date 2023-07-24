import { Component, Input, OnInit } from '@angular/core';
import { Hit, RecipeModel } from 'src/app/interfaces/recipe-model';
import { RecipeService } from 'src/app/services/recipeServ/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  searchQuery: string = ""; // Inizializzazione durante la dichiarazione
  searchResults: Hit[] = []; // da specificare (es: RootRecipe[])
  linkNextPage: any;

  constructor(private recipeService: RecipeService) { this.onSubmit(); }
  ngOnInit(): void {
    this.onSubmit();
  }

  // SEARCH FOOD
  onSubmit() {
    this.recipeService.searchRecipes(this.searchQuery).subscribe(
      {
        next: searchResults => this.searchResults = searchResults.hits,
        error: err => console.log('Errore nella ricerca', err)
      }
    );
  }

  //NEXT PAGE FOOD
  // getNextPage() {
  //   this.recipeService.searchRecipes(this.searchQuery).subscribe(
  //     {
  //       next: nextPage=> this.linkNextPage= nextPage._links.next.href,
  //       error:err=> console.log('Errore nella next page',err)
  //     }
  //   )
  // }




}

