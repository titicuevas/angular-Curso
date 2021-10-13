import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {
  

  heroes : string[]=['Spiderman','Iron man', 'Goku' , 'Luffy','Capitan America'];
  heroeBorrado: string = '';


borrarHeroe(){
  this.heroeBorrado = this.heroes.shift() || '';
  

}



}
