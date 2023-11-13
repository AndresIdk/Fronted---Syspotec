import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'updateHelper',
  standalone: true
})
export class UpdateHelperPipe implements PipeTransform {

  id: string = '';
  id_status: string = '';
  id_assigned: string = '';

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
