// RUTA: src/app/commons/menu/menu.component.ts

import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { SecurityService } from '../../../../commons/services/security.service';
import { DataService } from 'src/commons/services/data.service';
import { CommonService } from 'src/commons/services/common.service';
import { GUIOptions, GUIOptionsDefault } from '../../interfaces/GUIOptions.interface';

interface Menu {
  url: string;
  icon: string;
  title: string;
  level: number;
  disabled: boolean;
  open: boolean;
  children?: Menu[];
  roles?: string[];
}

@Component({
  selector: 'global-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input('options') set opt(val: GUIOptions) {
    this.guiOptions = val;
  }

  constructor(
    private router: Router,
    private security: SecurityService,
    private dataservice: DataService,
    private commonService: CommonService,
  ) {
    this.getMenu();
  }

  public menus: Menu[] = [];
  public guiOptions: GUIOptions = GUIOptionsDefault;

private getMenu(): void {
  this.dataservice.requestMenu().subscribe(
    (data: any) => {
      this.commonService.clearMessages();

      try {

        let menuData = data['menu'];

        console.log('MENU DATA:', menuData);

        const indexContratacion = menuData.findIndex(
          (m: Menu) => {
            const title = m.title?.trim().toLowerCase() || '';
            return title.includes('contratacion') || title.includes('contratación');
          }
        );

        const nuevoItem: Menu = {
          title: 'Solicitudes de Desarrollo',
          url: '/solicitudes-desarrollo',
          icon: 'assignment',
          level: indexContratacion !== -1 ? menuData[indexContratacion].level : 1,
          disabled: false,
          open: false,
          children: [],
          roles: []
        };

        if (indexContratacion !== -1) {
          menuData.splice(indexContratacion + 1, 0, nuevoItem);
        } else {
          menuData.push(nuevoItem);
        }

        console.log('Solicitudes de Desarrollo agregado');

        this.menus = menuData;

      } catch (error) {
        this.commonService.clearMessages();
        this.commonService.openSnackBar(
          'No se obtuvo información de menú',
          'error'
        );
      }
    },
    (err: any) => {
      this.commonService.clearMessages();
      this.commonService.openSnackBar(
        'No se obtuvo información de menú ' + err,
        'error'
      );
    }
  );
}

  public isSelected(route: string): boolean {
    return this.router.url.includes(route);
  }

  public getPermission(roles: any): boolean {
  const tkn = this.security.getLocalToken();

  if (!tkn || !tkn.aud) {
    return false;
  }

  if (!roles) {
    return true;
  }

  if (Array.isArray(roles) && roles.length === 0) {
    return true;
  }

  return tkn.aud.includes(roles);
}

  toggleDropdown(menu: any): void {
    menu['open'] = !menu['open'];
  }
}