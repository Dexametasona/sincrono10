import { MensajeService } from './service/mensaje.service';
import { CompSinc10Module } from './comp-sinc10/comp-sinc10.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompSinc10Module
  ],
  providers: [MensajeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
