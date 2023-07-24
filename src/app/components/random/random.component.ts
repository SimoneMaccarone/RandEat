import { Component, OnInit } from '@angular/core';
import { RandomRecipeModel } from 'src/app/interfaces/random-model';
import { RecipeService } from 'src/app/services/recipeServ/recipe.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {

  randomRecipe : RandomRecipeModel[]=[];

  constructor(private recipeService: RecipeService) {this.loadRandomRecipe();}

  ngOnInit(): void {
    this.loadRandomRecipe();
  }

  loadRandomRecipe(){
    this.recipeService.getRandomRecipe().subscribe({
      next: randomRecipe => this.randomRecipe = randomRecipe,
      error: err => console.log('Errore randomRecipe', err)
    })

  }

}
