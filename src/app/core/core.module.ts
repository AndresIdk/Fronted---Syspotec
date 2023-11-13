import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieModule } from 'ngx-cookie';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CookieModule.withOptions()
  ],
  providers: [
    CommonModule
  ]

})
export class CoreModule { }
