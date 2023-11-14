import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmationPipe } from '@shared/pipes/modal-confirmation/modal-confirmation.pipe';

@Component({
  selector: 'app-modal-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-confirmation.component.html',
  styleUrl: './modal-confirmation.component.css'
})
export class ModalConfirmationComponent {

  constructor (public modal:ModalConfirmationPipe) { }
  @Input() method: string = '';



}
