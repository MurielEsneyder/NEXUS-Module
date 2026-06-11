// RUTA: src/app/solicitudes-desarrollo/solicitudes-desarrollo.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SolicitudesDesarrolloRoutingModule } from './solicitudes-desarrollo-routing.module';
import { SolicitudesDesarrolloComponent } from './components/solicitudes-desarrollo/solicitudes-desarrollo.component';

@NgModule({
  declarations: [
    SolicitudesDesarrolloComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SolicitudesDesarrolloRoutingModule
  ]
})
export class SolicitudesDesarrolloModule { }