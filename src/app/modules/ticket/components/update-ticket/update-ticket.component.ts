import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StatesService } from '@modules/states/services/states.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Input } from '@angular/core';
import { TicketService } from '@modules/ticket/services/ticket.service';
import { ShoWModalUpdateViewPipe } from '@shared/pipes/show-modal-update-view.pipe';
import { forkJoin } from 'rxjs';
import { AssignedService } from '@modules/assigned/services/assigned.service';

@Component({
  selector: 'app-update-ticket',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-ticket.component.html',
  styleUrl: './update-ticket.component.css'
})
export class UpdateTicketComponent {
  @Input() id: string = '';
  @Input() id_status: string = '';
  @Input() id_assigned: string = '';

  states: any = [];
  ticket: any = {};
  assigned: any = {};
  state: any = {};

  updateTicket: FormGroup = new FormGroup({});

  constructor(private stateService: StatesService, private ticketService: TicketService, private statesService:StatesService,
    public updateModal:ShoWModalUpdateViewPipe, private assignedSservice: AssignedService) { }

  ngOnInit(): void {

    this.updateTicket = new FormGroup(
      {
        description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
        priority: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
        state: new FormControl('', [Validators.required])
      });

    forkJoin([
      this.ticketService.getTicket(this.id),
      this.stateService.getStateById(this.id_status),
      this.assignedSservice.getAssignedTicketsByID(this.id_assigned)  
    ]).subscribe(
      ([ticket, state, assigned]) => {
        this.ticket = ticket;
        this.state = state;
        this.assigned = assigned;
        console.log(assigned);

        this.updateTicket.setValue({
          description: this.ticket.description,
          priority: this.ticket.priority,
          state: this.state.id
        });
      },
      error => {
        console.error('Error:', error);
      }
    );

    this.stateService.getStates().subscribe((states) => {
      this.states = states;
    });

  }

  saveTicket(): void {
    const body = this.updateTicket.value;
    if(body.description == ''){
      body.description = this.ticket.description;
    }
    if(body.priority == ''){
      body.priority = this.ticket.priority;
    }
    if(body.state == ''){
      body.state = this.state.id;
    }

    this.ticketService.updateTicket(parseInt(this.id), body)
      .subscribe((res) => {
        console.log(res);
      })

    const bodyAssigned = {
      id_ticket: parseInt(this.id),
      iD_status: parseInt(body.state),
      nit: this.assigned.nit
    }

    this.assignedSservice.updateAssignedTicket(parseInt(this.id_assigned), bodyAssigned).subscribe((res) => {console.log(res)} );
  }

}
