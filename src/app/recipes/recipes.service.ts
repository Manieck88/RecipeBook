import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  public recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Sandwich', 
      'a tasty sandwich', 
      'https://cdn-eu-ec.yottaa.net/55b635db0b5344273c002031/d1fd69005c1501336a81123dfe2baf36.yottaa.net/v~4b.480/5993-3-large.jpg?yocs=2u_&yoloc=eu',
      [new Ingredient('meat', 1),
      new Ingredient('bread', 2)]),
    new Recipe('garlic spaghetti', 
    'Anty vampire dish', 
    'https://www.tablefortwoblog.com/wp-content/uploads/2017/09/pasta-aglio-e-olio-recipe-photos-tablefortwoblog-1.jpg',
    [new Ingredient('pasta', 50),
    new Ingredient('garlic', 2),
    new Ingredient('garlic', 2),])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

}
