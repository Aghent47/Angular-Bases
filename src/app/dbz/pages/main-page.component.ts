import { Component } from '@angular/core';
import { Character } from '../interfaces/characters.interface';

@Component({
  standalone: false,
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class DBZComponent{

  public characters: Character[] = [{
    name: 'Krillin',
    power: 501,
  },{
    name: 'Goku',
    power: 10001,
  },{
    name: 'Vegeta',
    power: 9000
  }
];


}
