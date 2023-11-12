import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ValidateSessionService } from '@core/guards/validate-session.guard';
import { RemoveSpacesPipe } from '@shared/pipes/remove-spaces.pipe';
import { CookieModule } from 'ngx-cookie/lib/cookie.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    // CookieModule.withOptions()
  ],
  providers: [
    ValidateSessionService,
    RemoveSpacesPipe,
    UserService
  ]
})
export class UserModule { }
