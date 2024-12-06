import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 46;

  get capitalizeName():string {
    return this.name.toLocaleUpperCase();
   };

   getHeroDescription():string {
    return `${this.name} - ${this.age} Años `;
   }

   changeHero():void  {
      this.name = 'Spiderman'
   }

   changeAge():void {
      this.age = 24
   }

   reset():void {
    this.name = 'iroman';
    this.age  = 46;
   }

}
