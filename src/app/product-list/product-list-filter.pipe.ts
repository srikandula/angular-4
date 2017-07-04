import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../service/iproduct';

@Pipe({
  name: 'productListFilter'
})
export class ProductListFilterPipe implements PipeTransform {

  transform(value: IProduct[], filterBy: string): IProduct[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((product: IProduct) =>
      product.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }

}
