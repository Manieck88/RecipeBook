import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addedIngredient = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit() {
  }

  addItem(name, amount){
    const newIngredient = new Ingredient(name.value, amount.value);
    this.addedIngredient.emit(newIngredient);
  }
}
