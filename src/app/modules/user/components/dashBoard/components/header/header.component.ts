import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DashBoardComponent } from '@modules/user/components/dashBoard/dash-board.component';
import { ShowModalPipe } from '@shared/pipes/show-modal.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, DashBoardComponent],
  // providers: [DashBoardComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public showModal: ShowModalPipe) { }

  menu: Array<{name:string, router:any}> = [
    {
      name: 'Tickets',
      router: []
    },
    {
      name: 'Crear Ticket',
      router: []
    }
  ]

}
