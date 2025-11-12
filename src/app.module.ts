import { Module } from '@nestjs/common';
import { NatsModule } from './shared/infrastructure/broker/nats.module';
import { ClienteModule } from './cliente/infrastructure/module/cliente.module';

@Module({
  imports: [
    NatsModule,
    ClienteModule,
  ],
})
export class AppModule {}
