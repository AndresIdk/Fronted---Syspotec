import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './loginPage/login-page/login-page.component';
import { RegisterPageComponent } from './registePage/register-page/register-page.component';
import { DashBoardPageComponent } from './dashBoard/dash-board-page/dash-board-page.component';
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
    component: DashBoardPageComponent,
    canActivate: [validateSessionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
