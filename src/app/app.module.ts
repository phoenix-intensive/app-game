import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from "./shared/layout/layout.component";
import {FooterComponent} from "./shared/layout/footer/footer.component";
import {HeaderComponent} from "./shared/layout/header/header.component";
import {HomeComponent} from './pages/home/home.component';
import {PrivacyPolicyComponent} from './pages/privacy-policy/privacy-policy.component';
import {AgeCheckComponent} from './pages/age-check/age-check.component';
import {TermsAndConditionsComponent} from './pages/terms-and-conditions/terms-and-conditions.component';
import {GameComponent} from './pages/game/game.component';
import {CookiePolicyComponent} from './pages/cookie-policy/cookie-policy.component';
import {CookieService} from "ngx-cookie-service";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PrivacyPolicyComponent,
    AgeCheckComponent,
    TermsAndConditionsComponent,
    GameComponent,
    CookiePolicyComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],


  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
