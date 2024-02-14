import { Component, resolveForwardRef } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent {

  valor: number = 0;
  funcionando: boolean = false;

  async start() {
    this.funcionando=true;
    while (this.funcionando) {
      this.valor--;
      if (this.valor < 0)
        this.valor = 2;
      await this.delay(1000);
    }
  }

  stop() {
    this.funcionando=false;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

}
