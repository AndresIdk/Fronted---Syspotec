import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
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