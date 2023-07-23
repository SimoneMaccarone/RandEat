import { Component, Input, OnInit } from '@angular/core';
import { Hit, RecipeModel } from 'src/app/interfaces/recipe-model';
import { RecipeService } from 'src/app/services/recipeServ/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  searchQuery: string = ""; // Inizializzazione durante la dichiarazione
  searchResults: any[] = []; // da specificare (es: RootRecipe[])

  constructor(private recipeService: RecipeService) { }


  onSubmit() {
    this.recipeService.searchRecipes(this.searchQuery).subscribe(
      (data) => {
        this.searchResults = data.hits;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

