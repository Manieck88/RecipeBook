import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() details: Recipe;

  constructor(private shopServ: ShoppingListService) { }

  ngOnInit() {
  }

  addToShoppingList(ingrArr: Ingredient[]) {
    ingrArr.map( el => this.shopServ.addItem(el));
  }
  
}
