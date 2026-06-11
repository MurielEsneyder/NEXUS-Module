import { Component } from '@angular/core';
import { ResizeService, WindowSize } from '../../services/resize.service';
@Component({
  selector: 'app-not-authorized',
  templateUrl: './not-authorized.component.html',
  styleUrl: './not-authorized.component.css'
})
export class NotAuthorizedComponent {
  public size: WindowSize;

  constructor(
    private resizeServ: ResizeService
  ) {
    this.size = this.resizeServ.getSize();
  }
}
