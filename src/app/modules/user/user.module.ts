import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ValidateSessionService } from '@core/guards/validate-session.guard';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,

  ],
  providers: [ValidateSessionService]
})
export class UserModule { }
