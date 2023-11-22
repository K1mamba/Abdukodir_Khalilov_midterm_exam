import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  users = [
    { firstName: 'nika', lastName: 'luka', age: 20 },
    { firstName: 'muha', lastName: 'mika', age: 18 },
    { firstName: 'luka', lastName: 'john', age: 28 },
    { firstName: 'kane', lastName: 'will', age: 22 },
    { firstName: 'leve', lastName: 'dave', age: 23 }
  ];
}



