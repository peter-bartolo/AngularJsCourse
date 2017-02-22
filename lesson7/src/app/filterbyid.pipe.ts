import { Pipe, PipeTransform } from '@angular/core';

interface anyId {
  id : number;
}

@Pipe({
  name: 'filterbyid'
})
export class FilterbyidPipe implements PipeTransform {

  transform(value: Array<anyId>, id: number): any {
    return value.filter(item => item.id == id);
  }

}
