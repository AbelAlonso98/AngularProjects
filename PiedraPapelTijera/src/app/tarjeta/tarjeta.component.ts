import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {

  @Input() nombre: string = "default";
  @Input() descripcion: string = "default";
  @Input() edad: number = 0;
  @Input() imagen: string = "default";
 
}
