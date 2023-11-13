import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TicketRoutingModule } from './ticket-routing.module';
import { ShowModalPipe } from '@shared/pipes/show-modal.pipe';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    HttpClientModule,
    ShowModalPipe
  ],
  providers: [
    ShowModalPipe
  ]
})
export class TicketModule { }
