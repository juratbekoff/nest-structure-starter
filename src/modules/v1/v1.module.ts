import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    ProductsModule,
    RouterModule.register([
      {
        path: 'v1',
        children: [
          {
            path: 'products',
            module: ProductsModule,
          },
        ],
      },
    ]),
  ],
})
export class V1Module {}
