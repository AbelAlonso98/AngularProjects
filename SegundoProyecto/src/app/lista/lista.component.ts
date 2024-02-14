import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listaDePersonajes:Personaje[] = [];
  ngOnInit(): void {
    this.listaDePersonajes= [
      new Personaje("Nuria", "./assets/imagenes/17.png", "La+loka", 2),
      new Personaje("Karlos", "./assets/imagenes/20.png", "WindevLover", 26),
      new Personaje("Natxo", "./assets/imagenes/23.png", "GlutenFree", 22),
      new Personaje("Pablo", "./assets/imagenes/28.png", "Gay", 0),
      new Personaje("Abel", "./assets/imagenes/43.png", "OwO", 25),
    ];
  }


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
