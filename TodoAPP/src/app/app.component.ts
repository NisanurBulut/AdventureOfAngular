import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  hepsiniGoster: false;
  getName() {
    return this.model.user;
  }
  getItems() {
    if (this.hepsiniGoster) {
      return this.model.items;
    }
    return this.model.items.filter(item => !item.action);
  }
  addItem(val) {
    if (val != "") {
      this.model.items.push(new TodoItem(val, false));
    }
  }
}
