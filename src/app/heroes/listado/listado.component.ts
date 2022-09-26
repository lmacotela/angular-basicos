import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[]=['Spiderman','Ironman','Hulk','Thord'];
  heroesBorrados: string[]=[];

  borrarHeroe(indice: number): void{
    this.heroesBorrados.push(this.heroes[indice]);
    this.heroes.splice(indice,1);
    console.log('Borrando...');
    console.log(this.heroesBorrados.values);
  }
}
