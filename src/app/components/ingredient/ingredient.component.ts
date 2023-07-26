import { Component, HostListener, OnInit } from '@angular/core';
import { IngredientsModel,Hit } from 'src/app/interfaces/ingredients-model';
import { RecipeService } from 'src/app/services/recipeServ/recipe.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent  {
  recipes: Hit[]=[];
  ingredients: string='';

  showBackToTop = false;
  scrollOffsetToShowButton = 200; // Imposta l'offset di scorrimento per mostrare il bottone


  constructor(private recipeService: RecipeService){ }

  searchRecipes(ingredients:string[]) {
    this.recipeService.searchRecipesByIngredients(ingredients).subscribe(
      {
        next: recipes => this.recipes = recipes.hits,
        error: err => console.log('Errore nella ricerca Ingredienti', err)
      }
    );
  }


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
