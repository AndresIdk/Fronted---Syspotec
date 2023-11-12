import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './components/dashBoard/dash-board.component';
import { LoginPageComponent } from './components/loginPage/login-page.component';
import { RegisterPageComponent } from './components/registerPage/register-page.component';
import { validateSessionGuard } from '@core/guards/validate-session.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'dashboard',
    component: DashBoardComponent,
    canActivate: [validateSessionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
