import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public title: string = 'Listado de Héroes';

  public heroesNames: string[] = [
    'Ironman', 'Thor', 'Hulk', 'Spiderman', 'Deadpool'
  ];

  public deleteHero?: string = '';

  removeLastHero():void {
    this.deleteHero = this.heroesNames.pop();

  }

}
