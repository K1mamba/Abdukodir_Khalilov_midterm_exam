import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ParentUser } from './parent-user.interface';
import { ChildUser } from './child-user.interface';
import { DisplayService } from './display.service';

@Component({
  selector: 'app-user',
  template: `
    <div>
      <h1>{{ message }}</h1>
      <div *ngFor="let user of users">
        <p>ID: {{ user.Id }}</p>
        <p>Firstname: {{ user.Firstname }}</p>
        <p>Lastname: {{ user.Lastname }}</p>
        <p>Date of Birth: {{ user.DateOfBirth | date }}</p>
        <p>Phone Number: {{ user.PhoneNumber }}</p>
        <p>Email: {{ user.Email }}</p>
        <hr>
      </div>
      <button (click)="passArrayToParent()">Pass Array to Parent</button>
    </div>
  `,
})
export class UserComponent {
  @Input() users: ParentUser[] = [];
  @Output() childUsersEvent = new EventEmitter<ChildUser[]>();
  message = 'Array from child component';
  childUsers: ChildUser[] = [
    { Id: 101, Firstname: 'nika', Lastname: 'luka', DateOfBirth: new Date('2000-08-10'), PhoneNumber: '599-28-29-30', Email: 'luka@gmail.com' },
  ];

  passArrayToParent() {
    this.childUsersEvent.emit(this.childUsers);
  }
}
