import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DashBoardComponent } from '@modules/user/components/dashBoard/dash-board.component';
import { ShowModalPipe } from '@shared/pipes/show-modal.pipe';
import { CookieService } from 'ngx-cookie-service';
import { ModalConfirmationPipe } from '@shared/pipes/modal-confirmation/modal-confirmation.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, DashBoardComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public showModal: ShowModalPipe, private cookie:CookieService, private closeSesion:ModalConfirmationPipe) { }

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

  state:boolean = false;

  closeSession() {
    this.cookie.deleteAll('/');
    this.closeSesion.openConfirmationCloseSession();
  }
}
