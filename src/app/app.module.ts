import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RandomComponent } from './components/random/random.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//      MATERIAL
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';
import { ReturnHomeBtnComponent } from './functions/return-home-btn/return-home-btn.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollToTopComponent } from './functions/scroll-to-top/scroll-to-top.component';
import { ScrollButtonComponent } from './functions/scroll-button/scroll-button.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RandomComponent,
    IngredientComponent,
    NavbarComponent,
    ReturnHomeBtnComponent,
    FooterComponent,
    ScrollToTopComponent,
    ScrollButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
