import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-age-check',
  templateUrl: './age-check.component.html',
  styleUrls: ['./age-check.component.scss']
})
export class AgeCheckComponent {

  constructor(private router: Router) {
  }

  confirmAge() {
    localStorage.setItem('ageConfirmed', 'true');
    this.router.navigate(['/']);
  }

  denyAge() {
    this.router.navigate(['/privacy-policy']);
  }
}


