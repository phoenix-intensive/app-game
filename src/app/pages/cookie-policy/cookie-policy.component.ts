import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";


@Component({
  selector: 'cookie-policy',
  templateUrl: './cookie-policy.component.html',
  styleUrls: ['./cookie-policy.component.scss']
})
export class CookiePolicyComponent implements OnInit {
  showCookieBanner = false;

  constructor(private cookieService: CookieService) {
  }

  ngOnInit(): void {
    const isCookieAccepted = this.cookieService.get('cookiesAccepted');
    this.showCookieBanner = !isCookieAccepted;
  }

  acceptCookies(): void {
    this.cookieService.set('cookiesAccepted', 'true', {expires: 365, path: '/'});
    this.showCookieBanner = false;
  }

  declineCookies(): void {
    this.cookieService.set('cookiesAccepted', 'false', {expires: 365, path: '/'});
    this.showCookieBanner = false;
  }
}
