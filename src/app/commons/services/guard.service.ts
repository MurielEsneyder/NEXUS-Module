import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SecurityService } from './security.service';


@Injectable({
  providedIn: 'root',
})

export class GuardService implements CanActivate, CanActivateChild {
  constructor(private router: Router, private securityService: SecurityService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {


    let res = this.securityService.isAuthorizedPath(route.data['expectedRoles']);
    if (!res) {
      this.router.navigate(['/not-auth']);
    }
    else {
      return res;
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {
    let res = this.securityService.isAuthorizedPath(route.data['expectedRoles']);
    if (!res) {
      this.router.navigate(['/not-auth']);
    }
    else {
      return res;
    }
  }
}
