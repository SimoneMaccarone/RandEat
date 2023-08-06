import { Component, inject } from '@angular/core';
import { RecipeService } from 'src/app/services/recipeServ/recipe.service';
//      MATERIAL and EXTRA
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatChipInputEvent, MatChipEditedEvent } from '@angular/material/chips';


export interface IngredientiMaterial {
  name: string;
}


@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})

export class IngredientComponent {
  recipes: any[] = [];

  // material
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  announcer = inject(LiveAnnouncer);
  ingredientsArrayFruits: IngredientiMaterial[] = [];

  constructor(private recipeService: RecipeService) { }

  //🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅
  searchRecipes() {
    if (this.ingredientsArrayFruits.length === 0) {
      // Se non ci sono ingredienti specificati, non fare la ricerca
      this.recipes = [];
      return;
    }

    const ingredients = this.ingredientsArrayFruits.map(ingrediente => ingrediente.name); // Estrai solo i nomi degli ingredienti
    this.recipeService.searchRecipesByIngredients(ingredients).subscribe(
      (response: any) => {
        if (response?.hits && Array.isArray(response.hits)) {
          // Filtra solo le ricette che contengono tutti gli ingredienti specificati
          this.recipes = response.hits.filter((recipe: { recipe: { ingredientLines: string[]; }; }) => this.containsAllIngredients(recipe.recipe.ingredientLines, ingredients));
        } else {
          // Nel caso in cui la risposta dell'API sia diversa da quanto previsto
          this.recipes = [];
          console.error('Risposta API imprevista:', response);
        }
      },
      error => {
        console.log('Errore nella ricerca Ingredienti', error);
        this.recipes = [];
      }
    );
  }

  // Resto del codice...

  containsAllIngredients(ingredientLines: string[], ingredients: string[]): boolean {
    // Verifica se tutti gli ingredienti cercati sono presenti nelle righe degli ingredienti della ricetta
    const lowerCaseIngredients = ingredients.map(ingredient => ingredient.toLowerCase().trim());
    const lowerCaseIngredientLines = ingredientLines.map(line => line.toLowerCase());
    return lowerCaseIngredients.every(ingredient => lowerCaseIngredientLines.some(line => line.includes(ingredient)));
  }


  //🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.ingredientsArrayFruits.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: IngredientiMaterial): void {
    const index = this.ingredientsArrayFruits.indexOf(fruit);

    if (index >= 0) {
      this.ingredientsArrayFruits.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  edit(fruit: IngredientiMaterial, event: MatChipEditedEvent) {
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


}
