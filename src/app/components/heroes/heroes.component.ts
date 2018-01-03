import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  
  //Para importar el servicio se hará en el contsructor
  constructor( private _heroesService:HeroesService ) { 
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();

    console.log(this.heroes);
  }

}
