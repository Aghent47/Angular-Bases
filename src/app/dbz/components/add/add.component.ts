import { Component } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-add',
  standalone: false,

  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  public character: Character =  {
    name: '',
    power: 0,
  }

  emitCharacter():void{
    console.log(this.character)
  }

}
