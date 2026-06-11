import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarConfig} from '@angular/material/snack-bar';

@Component({
  selector: 'snackBar',
  template: '{{ data }}',
})
export class SnackbarComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: MatSnackBarConfig) {}

}