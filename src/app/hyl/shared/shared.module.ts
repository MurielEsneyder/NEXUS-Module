import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [MenuComponent, InicioComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatListModule,      // Para las listas de navegación
    MatMenuModule,      // Para los menús y submenús
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    RouterModule,
    MatCardModule,
    MatTooltipModule,

  ], providers: [
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
