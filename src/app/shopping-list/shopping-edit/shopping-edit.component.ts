import { Component, OnInit } from '@angular/core';

import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shopServ: ShoppingListService) {}

  ngOnInit() {
  }

  addItem(name, amount){
    let item = new Ingredient(name, amount)
    this.shopServ.addItem(item);
  }
}
