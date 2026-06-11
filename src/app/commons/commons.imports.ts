import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Define los módulos globales que quieres usar en toda la aplicación
export const CommonsImports = [
  HttpClientModule,
  MatFormFieldModule,
  MatIconModule,
  ReactiveFormsModule,
  MatCardModule,
  MatGridListModule,
  CommonModule,
  MatInputModule,
  RouterModule,
];
