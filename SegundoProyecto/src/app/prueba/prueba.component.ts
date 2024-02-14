import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';
@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit{
  ngOnInit(): void {
    this.increase();
  }
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;

  async increase(){
    while(true){
      this.value += 1;

      if(this.value>100){
        this.value=0
      }
      await this.delay(100)
      
    }
  }


  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

}
