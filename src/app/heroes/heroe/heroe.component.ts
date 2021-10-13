import { Component } from "@angular/core";




@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html' 
})

export class HeroeComponent{

    nombre  : string = 'Iron Man';
    edad    : number = 34

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre ():string {
        
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(){
        this.nombre = 'Spiderman';
    }
    cambiarEdad(){
        this.edad = 25;
    }
}