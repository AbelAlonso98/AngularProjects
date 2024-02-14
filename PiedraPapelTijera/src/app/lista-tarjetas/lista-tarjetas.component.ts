import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tarjetas',
  templateUrl: './lista-tarjetas.component.html',
  styleUrls: ['./lista-tarjetas.component.css']
})
export class ListaTarjetasComponent {

  saludoParaTrunio: string = "hola que tal trunio owowowo";

  listaDePersonajes: Personaje[] = [
    new Personaje("Nuria", "./assets/img/17.png", "La+loka", 2),
    new Personaje("Karlos", "./assets/img/20.png", "WindevLover", 26),
    new Personaje("Natxo", "./assets/img/23.png", "GlutenFree", 22),
    new Personaje("Pablo", "./assets/img/28.png", "Gay", 0),
    new Personaje("Abel", "./assets/img/43.png", "OwO", 25),
  ];
}

class Personaje {
  nombre: string;
  imagen: string;
  descripcion: string;
  edad: number;

  constructor(n: string, i: string, d: string, e: number) {
    this.nombre = n;
    this.imagen = i;
    this.descripcion = d;
    this.edad = e;
  }
}