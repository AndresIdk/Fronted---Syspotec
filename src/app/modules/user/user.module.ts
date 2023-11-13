import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ValidateSessionService } from '@core/guards/validate-session.guard';
import { RemoveSpacesPipe } from '@shared/pipes/remove-spaces.pipe';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { StatesService } from '@modules/states/services/states.service';
import { TicketService } from '@modules/ticket/services/ticket.service';
import { AssignedService } from '@modules/assigned/services/assigned.service';
import { ShowModalPipe } from '@shared/pipes/show-modal.pipe';
import { ShoWModalUpdateViewPipe } from '@shared/pipes/show-modal-update-view.pipe';
import { UpdateTicketComponent } from '@modules/ticket/components/update-ticket/update-ticket.component';
import { UpdateHelperPipe } from '@shared/pipes/update-helper.pipe';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule

  ],
  providers: [
    ValidateSessionService,
    RemoveSpacesPipe,
    UserService,
    StatesService,
    ShowModalPipe,
    TicketService,
    AssignedService,
    ShoWModalUpdateViewPipe,
    UpdateTicketComponent,
    UpdateHelperPipe
  ]
})
export class UserModule { }
