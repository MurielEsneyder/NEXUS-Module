import { Component, Input } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'loading',
  template: `
    <div *ngIf="enable" style="top: 20; z-index: 3000; width: 100vw; position: fixed; height: 1px;">
        <mat-progress-bar color="accent" [mode]="barMode" style="height: 2px !important"></mat-progress-bar>
    </div>
  `,
})
export class LoadingComponent {

  public barMode: ProgressBarMode = 'indeterminate';
  public enable: boolean = false;

  constructor(private common: CommonService) {
    setTimeout(() => {
      this.common.loadingConfig.subscribe(val => {
        this.enable = val.enable,
          this.barMode = val.mode as ProgressBarMode
      });
    });
  }

}