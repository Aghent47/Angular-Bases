import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DBZComponent } from './pages/main-page.component';

@NgModule({
  declarations: [
    DBZComponent
  ],
  exports:[
    DBZComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
