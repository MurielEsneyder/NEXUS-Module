
import { NgModule } from '@angular/core';

//Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatTooltipModule } from "@angular/material/tooltip";
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';



import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
registerLocaleData(es);


@NgModule({
  exports: [

    MatSidenavModule,
    MatDialogModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatMenuModule,
    MatExpansionModule,
    MatListModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatTooltipModule,


  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }]
})
export class GUIModule {

}
