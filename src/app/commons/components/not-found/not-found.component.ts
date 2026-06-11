import { Component } from '@angular/core';
import { ResizeService, WindowSize } from '../../services/resize.service';
import { CommonsImports } from '../../commons.imports';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  public size: WindowSize;

  constructor(
    private resizeServ: ResizeService
  ) {
    this.size = this.resizeServ.getSize();
  }
}
