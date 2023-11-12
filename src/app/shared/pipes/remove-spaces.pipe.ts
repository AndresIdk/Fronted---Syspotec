import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces',
  standalone: true
})
export class RemoveSpacesPipe implements PipeTransform {

  transform(value: string, args: string): string {
    value = value.split(' ').join(args);
    return value;
  }

}
