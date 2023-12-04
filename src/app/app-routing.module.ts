import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RandomComponent } from './components/random/random.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'search', component: RecipeComponent },
  { path: 'ingredient', component: IngredientComponent },
  { path: 'random', component: RandomComponent },
  // { path: 'home', component: AppComponent },
  { path: '',   redirectTo: 'search', pathMatch: 'full' },
  { path: '**', redirectTo: 'search', pathMatch: 'full', },
  // { path: '**',   redirectTo: '/search', pathMatch: 'full' },

  // { path: '', component: AppComponent },
  // { path: '**', component:  },// wrong search
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { useHash: true })], // UseHash: true
  exports: [RouterModule]
})
export class AppRoutingModule { }
