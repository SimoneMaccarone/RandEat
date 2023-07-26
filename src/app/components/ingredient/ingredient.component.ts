import { Component, HostListener, OnInit } from '@angular/core';
import { IngredientsModel,Hit } from 'src/app/interfaces/ingredients-model';
import { RecipeService } from 'src/app/services/recipeServ/recipe.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent  {
  recipes: any[]=[];
  ingredients: string='';

  showBackToTop = false;
  scrollOffsetToShowButton = 200; // Imposta l'offset di scorrimento per mostrare il bottone


  constructor(private recipeService: RecipeService){ }

  searchRecipes(ingredients:string):any {
    const ingredientsArray = ingredients.split(',');
    this.recipeService.searchRecipesByIngredients(ingredientsArray).subscribe(
      {
        next: recipes => this.recipes = this.filterRecipesByIngredients(recipes.hits, ingredientsArray),
        error: err => console.log('Errore nella ricerca Ingredienti', err)
      }
    );
  }

  filterRecipesByIngredients(recipes: any[], ingredients: string[]): any[] {
    // Confronta gli ingredienti di ciascuna ricetta con l'elenco degli ingredienti cercati
    return recipes.filter(recipe => this.containsAllIngredients(recipe.recipe.ingredientLines, ingredients));
  }

  containsAllIngredients(ingredientLines: string[], ingredients: string[]): boolean {
    // Verifica se tutti gli ingredienti cercati sono presenti nelle righe degli ingredienti della ricetta
    const lowerCaseIngredients = ingredients.map(ingredient => ingredient.toLowerCase().trim());
    const lowerCaseIngredientLines = ingredientLines.map(line => line.toLowerCase());
    return lowerCaseIngredients.every(ingredient => lowerCaseIngredientLines.some(line => line.includes(ingredient)));
  }






  //------------------------------------------------------------------------
  @HostListener('window:scroll', [])
  onScroll(): void {
    this.showBackToTop = (window.scrollY > this.scrollOffsetToShowButton);
  }

  scrollToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  }

}
