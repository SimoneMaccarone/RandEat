import { Component } from '@angular/core';
import { RecipeService } from 'src/app/services/recipeServ/recipe.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent {
  randomElement: any;

  constructor(private recipeService: RecipeService) { }

}



// chiamare il cibo random con un generatore online e collegarlo al codice
// vecchio codice non funzionante
  // getRandomElement() {
  //   this.recipeService.getRandomElement().subscribe(
  //     (data) => {
  //       // Assuming the response data contains an array of hits, get a random hit
  //       if (data.hits && data.hits.length > 0) {
  //         const randomIndex = Math.floor(Math.random() * data.hits.length);
  //         this.randomElement = data.hits[randomIndex].recipe;
  //       }
  //     },
  //     (error) => {
  //       console.error('Error fetching random element:', error);
  //     }
  //   );
  // }
