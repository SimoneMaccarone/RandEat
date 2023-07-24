import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Hit } from 'src/app/interfaces/recipe-model';
import { RecipeService } from 'src/app/services/recipeServ/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  searchQuery: string = "";
  searchResults: Hit[] = [];

  showBackToTop = false;
  scrollOffsetToShowButton = 200; // Imposta l'offset di scorrimento per mostrare il bottone

  // linkNextPage: any;
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

