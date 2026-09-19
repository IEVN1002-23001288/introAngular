import { Component } from '@angular/core';

@Component({
  selector: 'app-heroeslist',
  standalone: false,
  styleUrl: './heroeslist.css',
  templateUrl: './heroeslist.html',
})
export class Heroeslist {

  imageWidth:number=40;
  imageMargin:number=2;
  muestraImage:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImage=!this.muestraImage
  }

  heroes:any[]=[
    {
      imagen:'https://dragonball-api.com/characters/goku_normal.webp',
      nombre:'Goku',
      descripcion:'Kame Hame Ha',
      race:'Saiyan',
      ki:9500
    },
    {
      imagen:'https://dragonball-api.com/characters/vegeta_normal.webp',
      nombre:'Veggeta',
      descripcion:'Resplandor final',
      race:'Saiyan',
      ki:9490
    },
    {
      imagen:'https://dragonball-api.com/characters/picolo_normal.webp',
      nombre:'Piccolo',
      descripcion:'Maka cosapo',
      race:'Namekian',
      ki:6300
    },
    {
      imagen:'https://dragonball-api.com/characters/Freezer.webp',
      nombre:'Freezer',
      descripcion:'Ha llegado la hora de tu muerte',
      race:'Frieza Race',
      ki:9400
    },

  ]
}
