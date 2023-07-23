import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RandomComponent } from './components/random/random.component';

const routes: Routes = [
  { path: 'search-recipe', component: RecipeComponent },
  { path: 'random-recipe', component: RandomComponent },

  // { path: '',   redirectTo: '/search-recipe', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component: RecipeComponent },// wrong search
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
