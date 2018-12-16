import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() itemDetail = new EventEmitter();

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://cdn.styleblueprint.com/wp-content/uploads/2018/04/Grove-Grill-shrimp-and-grits.jpg'),
    new Recipe('A second test recipe', 'This is simply a second test', 'https://cdn.styleblueprint.com/wp-content/uploads/2018/04/Grove-Grill-shrimp-and-grits.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  rcvdItmDtls(el: Recipe) {
    this.itemDetail.emit(el);
  }

}
