import { Injectable } from '@angular/core';

export interface WindowSize {
  height:number,
  width: number,
  mobile : boolean,
  landscape : boolean
}

@Injectable({providedIn:'root'})
export class ResizeService {

  private mobile_limit = 640;

  private size : WindowSize;
  constructor() {
    window.addEventListener('resize', event=>{
      let x = event.currentTarget as Window;
      this.size.height = x.screen.height;
      this.size.width = x.screen.width;
      this.size.mobile = (this.size.width < this.mobile_limit || this.size.height < this.mobile_limit);
      this.size.landscape = (this.size.width > this.size.height);
    })

    this.size = {
      height: window.screen.availHeight,
      width: window.screen.availWidth,
      mobile: (window.screen.availWidth < this.mobile_limit || window.screen.availHeight < this.mobile_limit),
      landscape : (window.screen.availWidth > window.screen.availHeight)
    };


  }

  public getSize() : WindowSize{
    return this.size;
  }

}
