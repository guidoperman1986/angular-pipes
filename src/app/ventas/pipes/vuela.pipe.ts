import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

  transform(vuela: boolean): unknown {
    return vuela ? 'Si' : 'No';
  }

}
