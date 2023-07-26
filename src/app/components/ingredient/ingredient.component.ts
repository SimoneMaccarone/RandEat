import { Component, HostListener, inject } from '@angular/core';
import { IngredientsModel,Hit } from 'src/app/interfaces/ingredients-model';
import { RecipeService } from 'src/app/services/recipeServ/recipe.service';
//      MATERIAL and EXTRA
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatChipInputEvent, MatChipEditedEvent } from '@angular/material/chips';


export interface Fruit {
  name: string;
}


@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})

export class IngredientComponent  {
  recipes: any[]=[];
  // ingredients: string='';

  showBackToTop = false;
  scrollOffsetToShowButton = 200; // Imposta l'offset di scorrimento per mostrare il bottone

  // material
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  ingredientsArrayFruits: Fruit[] = [];

  announcer = inject(LiveAnnouncer);

  constructor(private recipeService: RecipeService){ }

  searchRecipes(ingredientsArrayFruits:Fruit[]):any {
    // const ingredientsArray = ingredients.split(',');
    this.recipeService.searchRecipesByIngredients(ingredientsArrayFruits).subscribe(
      {
        next: recipes => this.recipes = recipes.hits,
        error: err => console.log('Errore nella ricerca Ingredienti', err)
      }
    );
  }

  // filterRecipesByIngredients(recipes: any[], ingredients: string[]): any[] {
  //   // Confronta gli ingredienti di ciascuna ricetta con l'elenco degli ingredienti cercati
  //   return recipes.filter(recipe => this.containsAllIngredients(recipe.recipe.ingredientLines, ingredients));
  // }

  // containsAllIngredients(ingredientLines: string[], ingredients: string[]): boolean {
  //   // Verifica se tutti gli ingredienti cercati sono presenti nelle righe degli ingredienti della ricetta
  //   const lowerCaseIngredients = ingredients.map(ingredient => ingredient.toLowerCase().trim());
  //   const lowerCaseIngredientLines = ingredientLines.map(line => line.toLowerCase());
  //   return lowerCaseIngredients.every(ingredient => lowerCaseIngredientLines.some(line => line.includes(ingredient)));
  // }
  //🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.ingredientsArrayFruits.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.ingredientsArrayFruits.indexOf(fruit);

    if (index >= 0) {
      this.ingredientsArrayFruits.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  edit(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(fruit);
      return;
    }

    // Edit existing fruit
    const index = this.ingredientsArrayFruits.indexOf(fruit);
    if (index >= 0) {
      this.ingredientsArrayFruits[index].name = value;
    }
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
