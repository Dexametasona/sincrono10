import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Body1Component } from './body1/body1.component';
import { Body2Component } from './body2/body2.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    Body1Component,
    Body2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    Body1Component,
    Body2Component
  ]
})
export class CompSinc10Module { }
