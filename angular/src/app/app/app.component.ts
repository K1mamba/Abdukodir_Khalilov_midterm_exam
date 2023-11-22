import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user.interface';

@Component({
  selector: 'app-root',
  template: `
    <div class="container mt-5">
      <h2>Reactive Form</h2>
      <form [formGroup]="userForm" (ngSubmit)="submitForm()">
        <div class="form-group">
          <label for="firstname">Firstname:</label>
          <input type="text" formControlName="Firstname" class="form-control">
          <div *ngIf="hasError('Firstname', 'required')" class="text-danger">Firstname is required</div>
          <div *ngIf="hasError('Firstname', 'minlength')" class="text-danger">Firstname must be at least 3 characters</div>
        </div>

        <div class="form-group">
          <label for="lastname">Lastname:</label>
          <input type="text" formControlName="Lastname" class="form-control">
          <div *ngIf="hasError('Lastname', 'required')" class="text-danger">Lastname is required</div>
          <div *ngIf="hasError('Lastname', 'minlength')" class="text-danger">Lastname must be at least 3 characters</div>
        </div>

        <div class="form-group">
          <label for="dateOfBirth">Date of Birth:</label>
          <input type="date" formControlName="DateOfBirth" class="form-control">
          <div *ngIf="hasError('DateOfBirth', 'required')" class="text-danger">Date of Birth is required</div>
        </div>

        <div class="form-group">
          <label for="phoneNumber">Phone Number:</label>
          <input type="tel" formControlName="PhoneNumber" class="form-control">
          <div *ngIf="hasError('PhoneNumber', 'required')" class="text-danger">Phone Number is required</div>
          <div *ngIf="hasError('PhoneNumber', 'minlength')" class="text-danger">Phone Number must be at least 9 characters</div>
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" formControlName="Email" class="form-control">
          <div *ngIf="hasError('Email', 'required')" class="text-danger">Email is required</div>
          <div *ngIf="hasError('Email', 'minlength')" class="text-danger">Email must be at least 8 characters</div>
        </div>

        <button type="submit" class="btn btn-primary" [disabled]="userForm.invalid">Submit</button>
      </form>
    </div>
  `,
})
export class AppComponent {
  userForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      Firstname: ['', [Validators.required, Validators.minLength(3)]],
      Lastname: ['', [Validators.required, Validators.minLength(3)]],
      DateOfBirth: ['', Validators.required],
      PhoneNumber: ['', [Validators.required, Validators.minLength(9)]],
      Email: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  submitForm() {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
      console.log('Submitted User:', user);
    }
  }

  /*hasError(controlName: string, errorType: string): boolean {
    const control = this.userForm.get(controlName);
    return control && control.hasError(errorType) && (control.dirty || control.touched);
  }*/
