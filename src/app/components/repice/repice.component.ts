import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from './services/recipeServ/recipe.service.ts';

@Component({
  selector: 'app-repice',
  templateUrl: './repice.component.html',
  styleUrls: ['./repice.component.scss']
})
export class RepiceComponent {
  searchQuery: string;
  searchResults: any[] = [];

  constructor(private recipeService: RecipeService) { }









}
