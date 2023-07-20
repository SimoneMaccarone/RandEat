import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from 'src/app/services/recipeServ/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  searchQuery!: string;
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
