import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./shared/layout/layout.component";
import {HomeComponent} from "./pages/home/home.component";
import {PrivacyPolicyComponent} from "./pages/privacy-policy/privacy-policy.component";
import {AgeCheckComponent} from "./pages/age-check/age-check.component";
import {AgeGuard} from "./core/age.guard";
import {TermsAndConditionsComponent} from "./pages/terms-and-conditions/terms-and-conditions.component";
import {GameComponent} from "./pages/game/game.component";
import {CookiePolicyComponent} from "./pages/cookie-policy/cookie-policy.component";

const routes: Routes = [
  {path: 'age-check', component: AgeCheckComponent},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', component: HomeComponent, canActivate: [AgeGuard]},
      {path: 'game', component: GameComponent, canActivate: [AgeGuard]},
      {path: 'privacy-policy', component: PrivacyPolicyComponent},
      {path: 'terms-and-conditions', component: TermsAndConditionsComponent},
      {path: 'cookie-policy', component: CookiePolicyComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
