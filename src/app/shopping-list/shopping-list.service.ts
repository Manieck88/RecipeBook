import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChange = new EventEmitter<Ingredient[]>()
    private ingredients: Ingredient[] =[
        new Ingredient('Apples', 5),
        new Ingredient('Onions', 10)
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addItem(item: Ingredient) {
        this.ingredients.push(item);
        this.ingredientsChange.emit(this.ingredients)
    }

}