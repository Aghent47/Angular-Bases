import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-add',
  standalone: false,

  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character =  {
    name: '',
    power: 0,
  }

  emitCharacter():void{
    console.log(this.character)
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character); // emitir el objeto ingresado 

  //limpiar los inputs
  this.character.name = '';
  this.character.power = 0;

  }

}
