import { MensajeService } from './../../service/mensaje.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body2',
  templateUrl: './body2.component.html',
  styleUrls: ['./body2.component.scss']
})
export class Body2Component implements OnInit {
  almacenTareas:string[]=[]
  

  constructor(private almacenService:MensajeService) { }

  ngOnInit(): void {
    this.almacenTareas=this.almacenService.almacenTareaClon
  }

}
