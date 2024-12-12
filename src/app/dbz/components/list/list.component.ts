import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

@Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 2000,
  }];

  @Output()
  public onDelete: EventEmitter<Number> = new EventEmitter();

  onDeleteCharacter(index:number):void {
    //TODO: Emitir el Id del personaje
    this.onDelete.emit(index);
  }
}
