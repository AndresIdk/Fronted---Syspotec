import { Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Pipe({
  name: 'modalConfirmation',
  standalone: true
})
export class ModalConfirmationPipe implements PipeTransform {

  opc = " ";

  // Modal de confirmacion de ticket creado
  public showCreate$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public showCreate = this.showCreate$.asObservable();

  // Modal de confirmacion de ticket actualizado
  public showUpdate$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public showUpdate = this.showUpdate$.asObservable();

  // Modal de confirmacion de ticket eliminado
  public showDelete$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public showDelete = this.showDelete$.asObservable();

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

  // Funciones de cambio de estado del modal de confirmacion de creacion
  public openConfirmationCreate(): any {
    this.opc = "Ticket creado exitosamente";
    this.showCreate$.next(true);
  }

  public closeCOnfirmationCreate(): any {
    this.showCreate$.next(false);
  }

  // Funciones de cambio de estado del modal de confirmacion de actualizacion
  public openConfirmationUpdate(): any {
    this.opc = "Ticket actualizado exitosamente";
    this.showUpdate$.next(true);
  }

  public closeConfirmationUpdate(): any {
    this.showUpdate$.next(false);
  }

  // Funciones de cambio de estado del modal de confirmacion de eliminacion
  public openConfirmationDelete(): any {
    this.opc = "Ticket eliminado exitosamente";
    this.showDelete$.next(true);
  }

  public closeConfirmationDelete(): any {
    this.showDelete$.next(false);
  }

}
