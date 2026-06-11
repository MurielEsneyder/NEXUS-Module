import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GUIModule } from './gui.module';
import { HealthLifeRouting } from './hyl.routing';
import { HealthLifeComponent } from './hyl.component';
import { SharedModule } from './shared/shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatListItem } from '@angular/material/list';

@NgModule({
  declarations: [HealthLifeComponent],
  imports: [
    CommonModule,
    HealthLifeRouting,
    GUIModule,
    SharedModule,
    MatMenuModule,
    MatListItem

  ],
  providers: []
})
export class HylModule { }
