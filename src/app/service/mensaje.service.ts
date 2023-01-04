import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  almacenTareaClon:string[]=[]
  almacenarTareas(tarea:string,descripcion:string){
      this.almacenTareaClon.push(tarea+': '+descripcion)
  }

  constructor() { }
}
