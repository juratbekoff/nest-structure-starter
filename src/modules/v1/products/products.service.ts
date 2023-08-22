import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getData() {
    let data = [
      {
        id: 1,
        name: 'Ahmad',
      },
      {
        id: 2,
        name: 'Juratbek',
      },
    ];
    return data;
  }
}
