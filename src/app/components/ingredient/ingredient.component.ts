import { Component, HostListener, OnInit } from '@angular/core';
import { IngredientsModel } from 'src/app/interfaces/ingredients-model';
import { RecipeService } from 'src/app/services/recipeServ/recipe.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {
  recipes: IngredientsModel[] = [];
  ingredientList: any[]=[];

  showBackToTop = false;
  scrollOffsetToShowButton = 200; // Imposta l'offset di scorrimento per mostrare il bottone


  constructor(private recipeService: RecipeService){ this.searchRecipes() }

  ngOnInit(): void {
    this.searchRecipes();
  }

  searchRecipes(): void {
    this.recipeService.searchRecipesByIngredients(this.ingredientList).subscribe(
      {
        next: searchResults => this.recipes = searchResults.hints,
        error: err => console.log('Errore nella ricerca Ingredienti', err)
      }
    );
  }


  @HostListener('window:scroll', [])
  onScroll(): void {
    // this.showBackToTop = (window.scrollY > 250); // Mostra il pulsante solo dopo uno scroll di 200px
    // this.showBackToTop = (document.documentElement.scrollTop > 175);
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
