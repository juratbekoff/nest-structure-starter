import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class ProductsController {
  @Get()
  getProducts(@Res() res: Response) {
    res.json({
      message: 'You did it!',
    });
  }
}
