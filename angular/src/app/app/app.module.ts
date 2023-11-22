import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { DisplayService } from './display.service';

@NgModule({
  declarations: [AppComponent, UserComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [DisplayService],
  bootstrap: [AppComponent],
})
export class AppModule {}
