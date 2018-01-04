import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

//Para poder usar el servicio se tiene que importar y así poder diferenciar el heroe que queremos
import { HeroesService } from '../../services/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  //Se importa como en cualquier otro componente
  heroe:any = {};
  casa:string;

  constructor( private activatedRoute:ActivatedRoute,
    private _heroesService:HeroesService ) {
    //Esto es para recibir los parámetros que se mandan por la URL
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    })
   }

  ngOnInit() {
  }

}
