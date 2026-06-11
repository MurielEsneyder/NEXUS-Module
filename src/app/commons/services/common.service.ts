import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../environments/environment';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {

  private IpV4Local: string = '';
  private IpV6Local: string = '';


  public loadingConfig: BehaviorSubject<{ enable: boolean, mode: string }> = new BehaviorSubject<{ enable: boolean, mode: string }>({ enable: false, mode: "indeterminate" });
  public windowTitle: BehaviorSubject<string>


  constructor(
    private snackbar: MatSnackBar,
    private spinner: NgxSpinnerService,
    private http: HttpClient
  ) {
    this.windowTitle = new BehaviorSubject<string>("H&L");
  }



  getIPPublica(): string {
    if (this.IpV4Local == null) {
      this.http.get<any>("http://ip-api.com/json").subscribe((data: any) => {
        this.IpV4Local = data.ip;

      });
      ;
    }
    return this.IpV4Local;
  }


  /**
   * Mensaje tipo material snack bar
   * @param message Contenido del mensaje
   * @param sbStyle tipo de estilo (info,warn, error)
   * @param duration Duración del mensaje en milisegundos
   * @param action Acción del snackbar
   */
  public openSnackBar(message: string = '', sbStyle: string = 'info', duration: number = 10000, action: string = ''): void {
    duration = (duration == 10000 && sbStyle != 'info') ? 20000 : duration;
    let panelStyle;
    switch (sbStyle) {
      case 'info':
        panelStyle = 'snackStyleInfo';
        break;
      case 'warn':
        panelStyle = 'snackStyleWarning';
        break;
      case 'warning':
        panelStyle = 'snackStyleWarning';
        break;
      default:
        panelStyle = 'snackStyleError';
    }
    if (message != null && message.length > 1) {
      this.snackbar.open(message, action, {
        duration: duration, panelClass: panelStyle, horizontalPosition: 'center'
      });
    }
    else {
      this.snackbar.dismiss();
    }
  }

  /**
   * Controla material progress bar superior
   * @param enable Activar
   * @param mode Modo progress bar
   */
  public loadingBar(enable: boolean = false, mode: string = "indeterminate"): void {
    this.loadingConfig.next({ enable: enable, mode: mode })
  }

  /**
   * Desactiva progress bar y cierra snackbar
   */
  public clearMessages(): void {
    this.openSnackBar();
    this.loadingBar();
  }


  public isProduction(): boolean {
    return environment.production;
  }

  /**
   * Copia al portapapeles un contenido seleccionado
   * @param str Contenido a copiar
   */
  public copyToClipBoard(str: string): void {
    this.clearMessages();
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = str;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.openSnackBar("Copiado a portapapeles");
  }

  /**
   * Fija el título en el header
   * @param title Contenido de título
   */
  public setTitle(title: string) {
    this.windowTitle.next(title)
  }

  public showSpinner(): void {
    this.spinner.show('sp1');
  }

  public hideSpinner(): void {
    this.spinner.hide('sp1');
  }
}
