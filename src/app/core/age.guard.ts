import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AgeGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(): boolean {
    const isAgeConfirmed = localStorage.getItem('ageConfirmed') === 'true';
    if (!isAgeConfirmed) {
      this.router.navigate(['/age-check']);
      return false;
    }
    return true;
  }

}
