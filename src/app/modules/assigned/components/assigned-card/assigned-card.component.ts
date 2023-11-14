import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatesService } from '@modules/states/services/states.service';
import { AssignedService } from '@modules/assigned/services/assigned.service';
import { AssignedInterface } from '@core/models/assigned.interface';
import { TicketService } from '@modules/ticket/services/ticket.service';
import { TicketInterface } from '@core/models/ticket.interface';
import { UserService } from '@modules/user/services/user.service';
import { UserDTOInterface } from '@core/models/userDTO.interface';
import { CookieService } from 'ngx-cookie-service';
import { ShoWModalUpdateViewPipe } from '@shared/pipes/show-modal-update-view.pipe';
import { UpdateTicketComponent } from '@modules/ticket/components/update-ticket/update-ticket.component';
import { UpdateHelperPipe } from '@shared/pipes/update-helper.pipe';
import { ModalConfirmationPipe } from '@shared/pipes/modal-confirmation/modal-confirmation.pipe';

@Component({
  selector: 'app-assigned-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assigned-card.component.html',
  styleUrl: './assigned-card.component.css'
})
export class AssignedCardComponent {

  constructor(private stateService: StatesService, private assignedService: AssignedService,
    private ticketService: TicketService, private userService: UserService,
    private cookieService: CookieService, private modalUpdate:ShoWModalUpdateViewPipe,
    private updateTicketComponent:UpdateTicketComponent, public updateHelper:UpdateHelperPipe,
    public modal:ModalConfirmationPipe) { }

  ListAssigned: AssignedInterface[] = [];
  nit = this.cookieService.get('nit');

  ngAfterContentInit(): void {
    this.assignedService.getAssignedTicketsByID(this.nit)
      .subscribe((assi) => {
        assi.forEach((assigned:any) => {
        this.ticketService.getTicket(assigned.id_ticket).subscribe((ticket: any) => {
          const Capticket = {
            id: ticket.id,
            description: ticket.description,
            priority: ticket.priority
          } as TicketInterface;

          this.userService.getUser(assigned.nit).subscribe((user: any) => {
            const capUser = {
              nit: user.nit,
              firstName: user.first_name,
              lastName: user.last_name,
              email: user.email
            } as UserDTOInterface;

            this.stateService.getStateById(assigned.iD_status).subscribe((state: any) => {
              const capState = {
                id: state.id,
                name: state.name
              }

              this.ListAssigned.push({
                id: assigned.id,
                ticket: Capticket,
                user: capUser,
                status: capState,
                date: assigned.date
              });
            });

          });
        });

      });
    });
  }

  deleteTicket(id: number) {
    this.ticketService.deleteTicket(id).subscribe((res) => {
      console.log('Eliminado');
    });
  }

  updateTicket(id: number, id_status: number, id_assigned: number) {
    this.modalUpdate.openModal();
    this.updateHelper.id = id.toString();
    this.updateHelper.id_status = id_status.toString();
    this.updateHelper.id_assigned = id_assigned.toString();
  }


}
