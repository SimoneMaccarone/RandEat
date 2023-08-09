import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RandomComponent } from './components/random/random.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';

const routes: Routes = [
  { path: 'search', component: RecipeComponent },
  { path: 'ingredient', component: IngredientComponent },
  { path: 'random', component: RandomComponent },
  // { path: '', component: RecipeComponent },
  // { path: '**', component: RecipeComponent },// wrong search
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
