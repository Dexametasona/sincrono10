import { MensajeService } from './../../service/mensaje.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body1',
  templateUrl: './body1.component.html',
  styleUrls: ['./body1.component.scss']
})
export class Body1Component implements OnInit {

  constructor(private almacenarService:MensajeService) { }

  almacenar(tarea:string, descripcion:string){
    this.almacenarService.almacenarTareas(tarea,descripcion)
  }
  ngOnInit(): void {
  }

}
