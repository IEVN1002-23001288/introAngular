import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  templateUrl: './figuras.html',
})
export class Figuras {
  num1:string=''
  num2:string=''
  resultado:number=0
  operacion:string='triangulo'

  calcular():void{
    switch (this.operacion) {

      case 'triangulo':
        this.resultado=(parseInt(this.num1)*parseInt(this.num2))/2
        break;

      case 'rectangulo':
        this.resultado=parseInt(this.num1)*parseInt(this.num2)
        break;

      case 'circulo':
        this.resultado=(parseInt(this.num1) * parseInt(this.num1))*3.1416
        break;

      case 'pentagono':
        this.resultado=(5 * parseInt(this.num1)*parseInt(this.num2))/2
        break;
    }
  }

}
