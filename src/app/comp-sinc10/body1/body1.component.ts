import { MensajeService } from './../../service/mensaje.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body1',
  templateUrl: './body1.component.html',
  styleUrls: ['./body1.component.scss']
})
export class Body1Component implements OnInit {
  tarea='';
  descript='';

  constructor(private almacenarService:MensajeService) { }

  almacenar(){
    this.almacenarService.almacenarTareas(this.tarea,this.descript)
    this.tarea='';
    this.descript='';
  }
  ngOnInit(): void {
  }

}
