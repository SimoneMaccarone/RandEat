import { Component } from '@angular/core';
import { RecipeService } from 'src/app/services/recipeServ/recipe.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent {
  searchQuery: string = ""; // Inizializzazione durante la dichiarazione
  searchResults: any[] = [];

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
