import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() displayElement = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  recipesClicked() {
    this.displayElement.emit('recipes');
  }

  shoppinListClicked() {
    this.displayElement.emit('shoppingList');
  }
}
