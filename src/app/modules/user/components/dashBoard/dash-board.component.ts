import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveSpacesPipe } from '@shared/pipes/remove-spaces.pipe';
import { HeaderComponent } from '@modules/user/components/dashBoard/components/header/header.component';
import { AssignedCardComponent } from '@modules/assigned/components/assigned-card/assigned-card.component';
import { NewTicketComponent } from '@modules/ticket/components/new-ticket/new-ticket.component';
import { ShowModalPipe } from '@shared/pipes/show-modal.pipe';
import { UpdateTicketComponent } from '@modules/ticket/components/update-ticket/update-ticket.component';
import { ShoWModalUpdateViewPipe } from '@shared/pipes/show-modal-update-view.pipe';
import { UpdateHelperPipe } from '@shared/pipes/update-helper.pipe';
import { ModalConfirmationComponent } from '@shared/modules/modal-confirmation/modal-confirmation.component';
import { ModalConfirmationPipe } from '@shared/pipes/modal-confirmation/modal-confirmation.pipe';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [CommonModule, HeaderComponent, AssignedCardComponent, NewTicketComponent, UpdateTicketComponent, ModalConfirmationComponent],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {

  value = 'Hello World o no';
  constructor(private removeSpace: RemoveSpacesPipe, public showModal:ShowModalPipe,
    public updateModal:ShoWModalUpdateViewPipe, public updateHelper:UpdateHelperPipe,
    public ModalConfirmation:ModalConfirmationPipe) { }
  

  ngOnInit(): void {
    this.value = this.removeSpace.transform(this.value, '🍷');
  }

}
