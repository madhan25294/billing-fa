import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterName'
})
// ProdName
export class FilterName implements PipeTransform {

  transform(tabledata: any, searchByName: any, searchThrough: any): any {
    if (!searchByName || searchByName === undefined) {
      return tabledata;
    } else {
      return tabledata.filter(
        (x: any) => {
          return x[searchThrough].toLowerCase()
            .includes(searchByName.toLowerCase());
        });
    }
  }
}
