import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      `mongodb+srv://vasyl:Vasyl2002-@cluster0.tayljb4.mongodb.net/test`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
