import { Component } from '@angular/core';
import { Hit, Root } from 'src/app/interfaces/recipe/recipe-model';
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
        console.error ('Errore nella ricerca', error);
      }
    );
  }

  // nextPage() {
  //   this.recipeService.searchRecipes(this.searchQuery).subscribe(
  //     (page) => {
  //       this.searchResults = page._links;
  //     },
  //     (error) => {
  //       console.log('Errore Next Page', error);
  //     }
  //   );
  // }

}
