import { Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Pipe({
  name: 'showModal',
  standalone: true
})

export class ShowModalPipe implements PipeTransform {

  public showModal$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public showModal = this.showModal$.asObservable();
  
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

  public openModal(): any {
    this.showModal$.next(true);
  }

  public closeModal(): any {
    this.showModal$.next(false);
  }

}
