import { Account } from './accounts/entities/account.entity';
import { Order } from './orders/entities/order.entity';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { AccountsModule } from './accounts/accounts.module';
import { ConfigModule } from '@nestjs/config';

//ES7 Decorators - Documentar ou estender
@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: process.env.DB_CONNECTION as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadModels: true,
      models: [Order, Account],
      sync: {
        alter: true,
        //force: true
      },
    }),
    OrdersModule,
    // SequelizeModule.forRoot({
    //   dialect: 'sqlite',
    //   host: join(__dirname, 'database.sqlite'),
    //   autoLoadModels: true,
    //   models: [Order, Account],
    //   sync: {
    //     alter: true,
    //     //force: true
    //   },
    // }),
    AccountsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
