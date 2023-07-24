import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Hit, RecipeModel } from 'src/app/interfaces/recipe-model';
import { RecipeService } from 'src/app/services/recipeServ/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  searchQuery: string = ""; // Inizializzazione durante la dichiarazione
  searchResults: Hit[] = []; // da specificare (es: RootRecipe[])
  linkNextPage: any;

  showBackToTop = false;

  constructor(private recipeService: RecipeService) { this.onSubmit(); }
  ngOnInit(): void {
    this.onSubmit();
  }

  // SEARCH FOOD
  onSubmit() {
    this.recipeService.searchRecipes(this.searchQuery).subscribe(
      {
        next: searchResults => this.searchResults = searchResults.hits,
        error: err => console.log('Errore nella ricerca', err)
      }
    );
  }


  @HostListener('window:scroll', [])
  onScroll(): void {
    this.showBackToTop = (window.pageYOffset > 200); // Mostra il pulsante solo dopo uno scroll di 200px
  }

  scrollToTop(): void {
    // Questa funzione farà lo scroll verso l'alto con un'animazione
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 200); // Controlla la velocità dello scroll regolando il valore "-20"
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 8);
  }






  //NEXT PAGE FOOD
  // getNextPage() {
  //   this.recipeService.searchRecipes(this.searchQuery).subscribe(
  //     {
  //       next: nextPage=> this.linkNextPage= nextPage._links.next.href,
  //       error:err=> console.log('Errore nella next page',err)
  //     }
  //   )
  // }
}

