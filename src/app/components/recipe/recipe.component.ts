import { Component } from '@angular/core';
import { Hit } from 'src/app/interfaces/recipe-model';
import { RecipeService } from 'src/app/services/recipeServ/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  searchQuery: string = '';
  searchResults: Hit[] = [];

  constructor(private recipeService: RecipeService) { }

  // SEARCH FOOD
  onSubmit() {
    if (this.searchQuery !== '') {

      this.recipeService.searchRecipes(this.searchQuery).subscribe(
        {
          next: searchResults => this.searchResults = searchResults.hits,
          error: err => console.log('Errore nella ricerca', err)
        }
      );
    }
  }

}

