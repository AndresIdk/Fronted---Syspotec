import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShowModalPipe } from '@shared/pipes/show-modal.pipe';
import { StatesService } from '@modules/states/services/states.service';
import { TicketService } from '@modules/ticket/services/ticket.service';
import { TicketInterface } from '@core/models/ticket.interface';
import { DBAssignedInterface } from '@core/models/db_assigned.interface';
import { CookieService } from 'ngx-cookie-service';
import { AssignedService } from '@modules/assigned/services/assigned.service';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  newTicket: FormGroup = new FormGroup({});

  states:any = [];
  
  constructor(public showModal:ShowModalPipe, private stateService:StatesService,
     private ticketService:TicketService, private cookierService:CookieService,
     private assignedService:AssignedService) { }

  ngOnInit(): void {
    this.newTicket = new FormGroup(
      {
        description: new FormControl('', [Validators.required,  Validators.minLength(3), Validators.maxLength(12)]),
        priority: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
        state: new FormControl('', [Validators.required])
      }
    )

    this.stateService.getStates().subscribe((states) => {
      this.states = states;
    })
  
  }

  assigned = {} as DBAssignedInterface;

  saveTicket() {
    const data = this.newTicket.value;
    const ticket = {
      description: data.description,
      priority: data.priority,
    } as TicketInterface;
    this.ticketService.createTicket(ticket).subscribe((res) => {
      console.log('Se guardo el ticket', res);

      this.assigned = {
        nit: parseInt(this.cookierService.get('nit')),
        id_ticket: res.id,
        ID_status: parseInt(data.state)
  
      } as DBAssignedInterface;

      this.assignedService.createAssignedTicket(this.assigned).subscribe((res) => {
        console.log('Se guardo el assigned', res);
      });
    });

    this.showModal.closeModal();
  }

}
