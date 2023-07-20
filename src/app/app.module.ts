import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Aggiungi questa riga
import { FormsModule } from '@angular/forms'; // Assicurati di aver incluso FormsModule qui

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepiceComponent } from './components/repice/repice.component';


@NgModule({
  declarations: [
    AppComponent,
    RepiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
