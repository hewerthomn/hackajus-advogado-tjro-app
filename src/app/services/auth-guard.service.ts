import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private storageService: StorageService
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log('auth guard route', route);

    const token = this.storageService.getAuthToken();
    if (!token) {
      this.router.navigate(['login']);

      return false;
    }

    return true;
  }
}
