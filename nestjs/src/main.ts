import { Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: process.env.KAFKA_CLIENT_ID,
        brokers: [process.env.KAFKA_HOST],
        ssl: process.env.KAFKA_USE_SSL === 'true',
        ...(process.env.KAFKA_SASL_USERNAME &&
          process.env.KAFKA_SASL_USERNAME !== '' &&
          process.env.KAFKA_SASL_PASSWORD &&
          process.env.KAFKA_SASL_PASSWORD !== '' && {
            sasl: {
              mechanism: 'plain',
              username: process.env.KAFKA_SASL_USERNAME,
              password: process.env.KAFKA_SASL_PASSWORD,
            },
          }),
      },
      consumer: {
        groupId: process.env.KAFKA_CONSUMER_GROUP_ID,
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();

//Modulo
