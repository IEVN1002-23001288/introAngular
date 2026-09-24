import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  templateUrl: './distancia.html',
})
export class Distancia {

  x1:string=''
  x2:string=''
  y1:string=''
  y2:string=''
  resultado:number=0


  calcular():void{
    this.resultado =
      (((parseFloat(this.x2) - parseFloat(this.x1)) ** 2) + ((parseFloat(this.y2) - parseFloat(this.y1)) ** 2)) ** 0.5;
  }

}

