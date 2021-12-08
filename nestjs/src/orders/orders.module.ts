import { AccountsModule } from './../accounts/accounts.module';
import { Order } from './entities/order.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    SequelizeModule.forFeature([Order]),
    AccountsModule,
    ClientsModule.registerAsync([
      {
        name: 'KAFKA_SERVICE',
        useFactory: () => ({
          transport: Transport.KAFKA,
          options: {
            client: {
              clientId: process.env.KAFKA_CLIENT_ID,
              brokers: [process.env.KAFKA_HOST],
              ssl: process.env.KAFKA_USE_SSL === 'true',
            },
          },
          consumer: {
            groupId: process.env.KAFKA_CONSUMER_GROUP_ID
          },
        }),
      },
    ]),
  ],
  controllers: [OrdersController],
  providers: [
    OrdersService,
    {
      provide: 'KAFKA_PRODUCER',
      useFactory: async (kafkaService: ClientKafka) => {
        return kafkaService.connect();
      },
      inject: ['KAFKA_SERVICE'],
    },
  ],
})
export class OrdersModule {}
