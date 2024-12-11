import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DBZComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DBZComponent,
    ListComponent,
    AddComponent
  ],
  exports:[
    DBZComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
