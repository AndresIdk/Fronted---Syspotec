import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AssignedRoutingModule } from './assigned-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AssignedRoutingModule,
    HttpClientModule
  ]
})
export class AssignedModule { }
