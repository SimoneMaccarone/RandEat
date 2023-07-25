import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipeServ/recipe.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {
  recipes: any[] = [];

  constructor(private recipeService: RecipeService){}

  ngOnInit(): void {
  }

  searchRecipes(ingredients: string[]): void {
    this.recipeService.searchRecipesByIngredients(ingredients).subscribe(
      (data: any) => {
        this.recipes = data.hints;
      },
      (error) => {
        console.log('Errore durante la ricerca delle ricette:', error);
      }
    );
  }


}
