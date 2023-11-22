import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DisplayService {
  displayUsers(users: any[]): void {
    console.log('Array is displayed by Display service');
    console.log(users);
  }
}
