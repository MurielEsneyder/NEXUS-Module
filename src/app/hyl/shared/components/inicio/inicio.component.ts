import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { SecurityService, tokenData, ldapUsrData } from '../../../../commons/services/security.service';


@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  theme = true;
  public usrSession : ldapUsrData | any;
  public token : tokenData;

  constructor(
      private router: Router,
      private security: SecurityService,
  ) {
      this.token = this.security.getLocalToken();

      this.usrSession =""

  }

  public isSelected(route: string): boolean {
      return route === this.router.url;
  }
}
